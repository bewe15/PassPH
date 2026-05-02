const COHESION_WORDS = [
  "however", "furthermore", "moreover", "in addition", "additionally",
  "consequently", "therefore", "thus", "hence", "nevertheless", "nonetheless",
  "although", "despite", "in contrast", "on the other hand", "for example",
  "for instance", "in conclusion", "to summarize", "to conclude", "firstly",
  "secondly", "thirdly", "finally", "in terms of", "with regard to",
  "as a result", "due to", "because of", "in order to", "such as",
  "not only", "whereas", "while", "even though", "in spite of",
  "rather than", "instead of", "on the contrary", "by contrast",
  "similarly", "likewise", "in the same way", "to illustrate",
  "specifically", "namely", "in other words", "as well as",
  "at the same time", "on balance", "overall", "in summary",
  "to begin with", "in particular", "for this reason", "as a consequence",
];

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "are", "was", "were", "be", "been",
  "being", "have", "has", "had", "do", "does", "did", "will", "would",
  "could", "should", "may", "might", "shall", "can", "that", "this",
  "these", "those", "it", "its", "they", "them", "their", "he", "she",
  "his", "her", "we", "our", "you", "your", "i", "my", "me", "us",
  "not", "no", "so", "as", "if", "then", "than", "also", "just",
  "more", "most", "some", "any", "all", "each", "both", "very",
]);

const COMPLEXITY_MARKERS = [
  "which", "who", "whom", "whose", "where", "when", "because", "although",
  "since", "unless", "until", "whether", "while", "if", "after", "before",
  "once", "that", "though", "even though", "provided that", "as long as",
  "despite the fact", "in order that", "so that",
];

export interface TaskScoreBreakdown {
  wordCount:       { score: number; max: number; words: number; feedback: string };
  vocabulary:      { score: number; max: number; ttr: number; feedback: string };
  cohesion:        { score: number; max: number; count: number; words: string[]; feedback: string };
  sentenceVariety: { score: number; max: number; avgLength: number; feedback: string };
  grammar:         { score: number; max: number; issues: string[]; feedback: string };
  total: number;
  band:  number;
}

function getWords(text: string): string[] {
  return text.trim().split(/\s+/).filter((w) => w.length > 0);
}

function getRawSentences(text: string): string[] {
  return text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => s.length > 0);
}

function getSentences(text: string): string[] {
  return text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.split(/\s+/).filter((w) => w.length > 0).length > 2);
}

// ── Word Count (25 pts) ───────────────────────────────────────────────────────

function scoreWordCount(
  words: number,
  taskType: string
): { score: number; max: number; words: number; feedback: string } {
  const max = 25;

  if (taskType === "pte_swt") {
    if (words < 5)   return { score: 0,   max, words, feedback: `Too short (${words} words) — write 5–75 words.` };
    if (words <= 75) return { score: 25,  max, words, feedback: `Good length (${words} words). ✓` };
    return                  { score: 8,   max, words, feedback: `Too long (${words} words) — SWT must be under 75 words.` };
  }

  let min: number, target: number;
  if (taskType === "ielts_task1")   { min = 150; target = 180; }
  else if (taskType === "pte_essay") { min = 200; target = 250; }
  else                               { min = 250; target = 280; }

  if (words < Math.floor(min * 0.7)) return { score: 0,  max, words, feedback: `Far too short (${words} words) — aim for at least ${min}.` };
  if (words < min)                    return { score: 8,  max, words, feedback: `Below minimum (${words}/${min} words) — write more.` };
  if (words < target)                 return { score: 18, max, words, feedback: `Meets minimum (${words} words). Aim for ${target}+ for stronger marks.` };
  return                                     { score: 25, max, words, feedback: `Excellent word count (${words} words). ✓` };
}

// ── Vocabulary (20 pts) ───────────────────────────────────────────────────────

function scoreVocabulary(words: string[]): { score: number; max: number; ttr: number; feedback: string } {
  const max = 20;
  const meaningful = words
    .map((w) => w.toLowerCase().replace(/[^a-z]/g, ""))
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  if (meaningful.length === 0) return { score: 0, max, ttr: 0, feedback: "No meaningful vocabulary detected." };

  const unique = new Set(meaningful).size;
  const ttr = Math.round((unique / meaningful.length) * 100) / 100;

  if (ttr > 0.65) return { score: 20, max, ttr, feedback: "Excellent vocabulary variety. ✓" };
  if (ttr > 0.55) return { score: 16, max, ttr, feedback: "Good vocabulary variety." };
  if (ttr > 0.45) return { score: 12, max, ttr, feedback: "Moderate vocabulary — try using more synonyms." };
  if (ttr > 0.35) return { score: 8,  max, ttr, feedback: "Low vocabulary variety — avoid repeating the same words." };
  return                 { score: 4,  max, ttr, feedback: "Very repetitive vocabulary — use a wider range of words." };
}

// ── Cohesion (20 pts) ─────────────────────────────────────────────────────────

function scoreCohesion(text: string): { score: number; max: number; count: number; words: string[]; feedback: string } {
  const max = 20;
  const lower = text.toLowerCase();
  const found = COHESION_WORDS.filter((w) => lower.includes(w));
  const count = found.length;

  if (count >= 7) return { score: 20, max, count, words: found, feedback: "Excellent use of linking words. ✓" };
  if (count >= 5) return { score: 16, max, count, words: found, feedback: "Good cohesion — ideas are well-linked." };
  if (count >= 3) return { score: 12, max, count, words: found, feedback: "Some linking words used — add a few more." };
  if (count >= 1) return { score: 6,  max, count, words: found, feedback: "Few linking words — use more (however, furthermore, in addition…)." };
  return                 { score: 0,  max, count, words: [],    feedback: "No linking words found — connect your ideas with transitions." };
}

// ── Sentence Variety (15 pts) ─────────────────────────────────────────────────

function scoreSentenceVariety(text: string): { score: number; max: number; avgLength: number; feedback: string } {
  const max = 15;
  const sentences = getSentences(text);

  if (sentences.length < 2) return { score: 3, max, avgLength: 0, feedback: "Write more sentences to show variety." };

  const lengths = sentences.map((s) => s.split(/\s+/).filter((w) => w.length > 0).length);
  const avg = Math.round(lengths.reduce((a, b) => a + b, 0) / lengths.length);
  const variance = lengths.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / lengths.length;
  const stdDev = Math.sqrt(variance);

  if (avg < 5)  return { score: 3,  max, avgLength: avg, feedback: "Sentences are very short — write more complex sentences." };
  if (avg > 40) return { score: 6,  max, avgLength: avg, feedback: "Sentences are very long — break some up for clarity." };

  if (stdDev >= 8 && avg >= 10 && avg <= 28) return { score: 15, max, avgLength: avg, feedback: "Excellent sentence variety. ✓" };
  if (stdDev >= 5)                            return { score: 12, max, avgLength: avg, feedback: "Good sentence variety." };
  if (stdDev >= 3)                            return { score: 8,  max, avgLength: avg, feedback: "Some variety — mix shorter and longer sentences more." };
  return                                             { score: 4,  max, avgLength: avg, feedback: "Sentences are too uniform — vary your sentence structure." };
}

// ── Grammar & Accuracy (20 pts) ───────────────────────────────────────────────

function scoreGrammar(text: string): { score: number; max: number; issues: string[]; feedback: string } {
  const max = 20;
  const issues: string[] = [];
  let score = 20;

  const rawSentences = getRawSentences(text);
  const totalSentences = rawSentences.length;

  if (totalSentences === 0) return { score: 0, max, issues: ["No sentences detected."], feedback: "No sentences detected." };

  // 1. Capitalization — each sentence should start with a capital letter (up to -5)
  const uncapitalized = rawSentences.filter((s) => s.length > 0 && s[0] !== s[0].toUpperCase()).length;
  if (uncapitalized > 0) {
    const penalty = Math.min(5, uncapitalized * 2);
    score -= penalty;
    issues.push(`${uncapitalized} sentence(s) don't start with a capital letter.`);
  }

  // 2. End punctuation — sentences should end with . ? ! (up to -4)
  const missingPunctuation = rawSentences.filter((s) => !/[.!?]$/.test(s.trim())).length;
  if (missingPunctuation > 0) {
    const penalty = Math.min(4, missingPunctuation);
    score -= penalty;
    issues.push(`${missingPunctuation} sentence(s) missing end punctuation.`);
  }

  // 3. Repeated consecutive words — "the the", "a a" (up to -4)
  const repeatMatches = text.match(/\b(\w+)\s+\1\b/gi) ?? [];
  if (repeatMatches.length > 0) {
    const penalty = Math.min(4, repeatMatches.length * 2);
    score -= penalty;
    const uniqueRepeats = repeatMatches
      .map((m) => m.toLowerCase())
      .filter((v, i, a) => a.indexOf(v) === i);
    issues.push(`Repeated words found: ${uniqueRepeats.join(", ")}.`);
  }

  // 4. Sentence fragments — sentences under 4 words (up to -4)
  const fragments = rawSentences.filter((s) => {
    const words = s.replace(/[.!?]/g, "").trim().split(/\s+/).filter((w) => w.length > 0);
    return words.length > 0 && words.length < 4;
  }).length;
  if (fragments > 0) {
    const penalty = Math.min(4, fragments * 2);
    score -= penalty;
    issues.push(`${fragments} possible sentence fragment(s) — ensure complete sentences.`);
  }

  // 5. Complexity bonus — subordinate clauses show grammatical range (+3 if present, capped at max)
  const lower = text.toLowerCase();
  const hasComplexity = COMPLEXITY_MARKERS.some((m) => lower.includes(` ${m} `) || lower.includes(` ${m},`));
  if (!hasComplexity) {
    score -= 3;
    issues.push("No complex sentence structures detected — use clauses with 'which', 'because', 'although', etc.");
  }

  score = Math.max(0, score);

  const feedback =
    issues.length === 0
      ? "Good grammar and sentence accuracy. ✓"
      : issues.length === 1
      ? issues[0]
      : `${issues.length} grammar signals to improve.`;

  return { score, max, issues, feedback };
}

// ── Band conversion ───────────────────────────────────────────────────────────

function totalToBand(total: number): number {
  if (total >= 95) return 9.0;
  if (total >= 88) return 8.5;
  if (total >= 80) return 8.0;
  if (total >= 72) return 7.5;
  if (total >= 63) return 7.0;
  if (total >= 54) return 6.5;
  if (total >= 45) return 6.0;
  if (total >= 36) return 5.5;
  if (total >= 27) return 5.0;
  if (total >= 18) return 4.5;
  return 4.0;
}

// ── Public API ────────────────────────────────────────────────────────────────

export function scoreTask(text: string, taskType: string): TaskScoreBreakdown {
  const words = getWords(text);
  const wordCount       = scoreWordCount(words.length, taskType);
  const vocabulary      = scoreVocabulary(words);
  const cohesion        = scoreCohesion(text);
  const sentenceVariety = scoreSentenceVariety(text);
  const grammar         = scoreGrammar(text);
  const total = wordCount.score + vocabulary.score + cohesion.score + sentenceVariety.score + grammar.score;
  return { wordCount, vocabulary, cohesion, sentenceVariety, grammar, total, band: totalToBand(total) };
}

export function overallBand(bands: number[]): number {
  if (bands.length === 0) return 0;
  const avg = bands.reduce((a, b) => a + b, 0) / bands.length;
  return Math.round(avg * 2) / 2;
}
