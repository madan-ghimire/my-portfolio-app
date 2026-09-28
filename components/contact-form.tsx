"use client";

import { useState, type ChangeEvent } from "react";
import { CheckCircle2, Loader2, Mail, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputBase =
  "w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Email is incorrect";
  if (v.message.trim().length < 10)
    e.message = "Message must be at least 10 characters";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    };

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const honeypot = (
        e.currentTarget.elements.namedItem("company") as HTMLInputElement
      )?.value;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company: honeypot }),
      });
      if (res.status === 422) {
        const data = await res.json();
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      setValues({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-xs text-destructive">
        {errors[k]}
      </p>
    ) : null;
  const invalid = (k: keyof Fields) => (errors[k] ? "border-destructive" : "");

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border bg-card p-6 text-left shadow-sm"
    >
      <h3 className="mb-5 text-xl font-semibold">Contact form</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Full name"
              aria-label="Full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              value={values.name}
              onChange={set("name")}
              className={`${inputBase} pl-10 ${invalid("name")}`}
            />
          </div>
          {err("name")}
        </div>

        <div>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email address"
              aria-label="Email address"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              value={values.email}
              onChange={set("email")}
              className={`${inputBase} pl-10 ${invalid("email")}`}
            />
          </div>
          {err("email")}
        </div>
      </div>

      <div className="mt-4">
        <textarea
          name="message"
          rows={6}
          placeholder="Your message"
          aria-label="Message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          value={values.message}
          onChange={set("message")}
          className={`${inputBase} resize-y ${invalid("message")}`}
        />
        {err("message")}
      </div>

      {/* Honeypot: hidden from people, tempting for bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" && (
            <span className="flex items-center gap-1.5 text-green-600 dark:text-green-500">
              <CheckCircle2 className="h-4 w-4" /> Thanks! Your message was
              sent.
            </span>
          )}
          {status === "error" && (
            <span className="text-destructive">
              Something went wrong. Please try again or email me directly.
            </span>
          )}
        </p>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          {status === "sending" ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
