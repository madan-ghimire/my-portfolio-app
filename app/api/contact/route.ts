import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field, bots often do.
  if (body.company) return NextResponse.json({ ok: true });

  const name = String(body.name ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 80)
    errors.name = "Please enter your full name";

  if (!EMAIL_RE.test(email) || email.length > 120)
    errors.email = "Email is incorrect";
  if (message.length < 10 || message.length > 3000)
    errors.message = "Message must be between 10 and 3000 characters";

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Server is not configured" },
      { status: 500 },
    );
  }

  // Create the client inside the handler so the build doesn't fail without env vars.
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Could not send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
