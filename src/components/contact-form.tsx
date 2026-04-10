"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type ContactFormProps = {
  title: string;
  description: string;
  buttonLabel: string;
  loadingLabel: string;
  successTitle: string;
  successMessage: string;
};

export function ContactForm({
  title,
  description,
  buttonLabel,
  loadingLabel,
  successTitle,
  successMessage,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1400);
  }

  return (
    <div className="card-surface rounded-[1.7rem] p-6 md:p-8">
      <p className="eyebrow">Quick Inquiry</p>
      <h3 className="section-title mt-3 text-[1.9rem] font-extrabold text-primary">
        {title}
      </h3>
      <p className="mt-3 max-w-xl text-[0.93rem] leading-7 text-slate-600">
        {description}
      </p>

      <form className="mt-6 space-y-3.5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-[1rem] border border-border bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-secondary"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-[1rem] border border-border bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-secondary"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-[1rem] border border-border bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-secondary"
          required
        />
        <textarea
          placeholder="Tell us briefly what kind of support you are looking for"
          rows={5}
          className="w-full rounded-[1rem] border border-border bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-secondary"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-90"
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
              {loadingLabel}
            </>
          ) : (
            buttonLabel
          )}
        </button>
      </form>

      {isSubmitted ? (
        <div className="mt-4 rounded-[1rem] border border-emerald-200 bg-emerald-50 px-4 py-3">
          <p className="text-sm font-semibold text-emerald-700">{successTitle}</p>
          <p className="mt-1 text-[0.84rem] leading-6 text-emerald-700/90">
            {successMessage}
          </p>
        </div>
      ) : null}
    </div>
  );
}
