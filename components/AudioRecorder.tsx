"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Mic, Square, Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type RecorderState = "idle" | "recording" | "recorded" | "playing";

interface AudioRecorderProps {
  onRecordingComplete: (blob: Blob, durationSeconds: number) => void;
  maxSeconds?: number;
  disabled?: boolean;
  existingBlob?: Blob | null;
}

export function AudioRecorder({
  onRecordingComplete,
  maxSeconds = 120,
  disabled = false,
  existingBlob = null,
}: AudioRecorderProps) {
  const [state, setState] = useState<RecorderState>(existingBlob ? "recorded" : "idle");
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(
    existingBlob ? URL.createObjectURL(existingBlob) : null
  );

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const durationRef = useRef(0);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : "audio/mp4";

      const mr = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mr;
      chunksRef.current = [];
      durationRef.current = 0;
      setDuration(0);

      mr.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setState("recorded");
        stream.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
        onRecordingComplete(blob, durationRef.current);
      };

      mr.start(250);
      setState("recording");

      timerRef.current = setInterval(() => {
        durationRef.current += 1;
        setDuration((d) => {
          const next = d + 1;
          if (next >= maxSeconds) {
            mr.stop();
            if (timerRef.current) clearInterval(timerRef.current);
          }
          return next;
        });
      }, 1000);
    } catch {
      alert("Please allow microphone access to record your response. Check your browser settings.");
    }
  }, [maxSeconds, onRecordingComplete]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const togglePlayback = useCallback(() => {
    if (!audioRef.current) return;
    if (state === "playing") {
      audioRef.current.pause();
      setState("recorded");
    } else {
      audioRef.current.play();
      setState("playing");
    }
  }, [state]);

  const reRecord = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setDuration(0);
    setState("idle");
  }, [audioUrl]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const mm = Math.floor(duration / 60).toString().padStart(2, "0");
  const ss = (duration % 60).toString().padStart(2, "0");
  const maxMm = Math.floor(maxSeconds / 60).toString().padStart(2, "0");
  const maxSs = (maxSeconds % 60).toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4 py-2">
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setState("recorded")}
          className="hidden"
        />
      )}

      {state === "recording" && (
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <span className="text-sm font-mono font-bold text-red-600">
            {mm}:{ss} / {maxMm}:{maxSs}
          </span>
        </div>
      )}

      {(state === "recorded" || state === "playing") && (
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="font-mono">{mm}:{ss} recorded</span>
        </div>
      )}

      <div className="flex items-center gap-3 flex-wrap justify-center">
        {state === "idle" && (
          <Button
            onClick={startRecording}
            disabled={disabled}
            className="gap-2 bg-red-500 hover:bg-red-600 text-white px-6"
          >
            <Mic className="w-4 h-4" />
            Start Recording
          </Button>
        )}

        {state === "recording" && (
          <Button
            onClick={stopRecording}
            variant="outline"
            className="gap-2 border-red-300 text-red-600 hover:bg-red-50 px-6"
          >
            <Square className="w-4 h-4 fill-current" />
            Stop Recording
          </Button>
        )}

        {(state === "recorded" || state === "playing") && (
          <>
            <Button
              onClick={togglePlayback}
              variant="outline"
              className="gap-2 px-5"
            >
              {state === "playing" ? (
                <><Pause className="w-4 h-4" /> Pause</>
              ) : (
                <><Play className="w-4 h-4" /> Play Back</>
              )}
            </Button>
            <Button
              onClick={reRecord}
              variant="ghost"
              size="sm"
              className="gap-1.5 text-slate-500 hover:text-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Re-record
            </Button>
          </>
        )}
      </div>

      {state === "idle" && !disabled && (
        <p className="text-xs text-slate-400 text-center">
          Ensure your microphone is connected and browser permission is granted.
        </p>
      )}
    </div>
  );
}
