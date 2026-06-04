import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Scoravo Contact <onboarding@resend.dev>",
      to: "mygraphicsworks@gmail.com",
      replyTo: email,
      subject: `[Scoravo Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #06b6d4; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Message</h1>
            <p style="color: #cffafe; margin: 4px 0 0; font-size: 14px;">via Scoravo Contact Form</p>
          </div>
          <div style="background: white; border: 1px solid #e2e8f0; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 80px; font-weight: 600;">Name</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #06b6d4;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Subject</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${subject}</td>
              </tr>
            </table>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
              <p style="color: #64748b; font-size: 12px; font-weight: 600; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="color: #1e293b; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
