// app/contact/page.js
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - BitLinks",
  description: "Get in touch with the BitLinks team.",
};

export default function Contact() {
  return (
    <div className="md:max-w-4xl w-108 md:mx-auto py-6 px-3 not-md:pl-6 md:px-6 md:py-16 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-xl mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-heading tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          Have questions, feedback, or need help with a short link? We would
          love to hear from you.
        </p>
      </div>

      {/* Main Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-10">
        {/* Email Card */}
        <div className="bg-surface border border-border-light rounded-2xl p-8 shadow-card flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-3xl mb-4">
            ✉️
          </div>
          <h3 className="text-xl font-bold text-heading mb-1">Email Us</h3>
          <p className="text-muted text-sm mb-4">
            For support, inquiries, and general questions.
          </p>
          <a
            href="mailto:support@bitlinks.com"
            className="text-primary font-semibold text-lg hover:underline break-all"
          >
            support@bitlinks.com
          </a>
          <span className="text-xs text-muted mt-3">
            Expected response: within 24h
          </span>
        </div>

        {/* GitHub / Developer Card */}
        <div className="bg-surface border border-border-light rounded-2xl p-8 shadow-card flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl mb-4">
            🐙
          </div>
          <h3 className="text-xl font-bold text-heading mb-1">GitHub</h3>
          <p className="text-muted text-sm mb-4">
            Check out the source code or report an issue.
          </p>
          <Link
            href="https://github.com/ankitsuthar72747-hash?tab=repositories"
            target="_blank"
            className="text-primary font-semibold text-lg hover:underline"
          >
            github.com/ankitsuthar
          </Link>
          <span className="text-xs text-muted mt-3">
            Open source repository
          </span>
        </div>
      </div>

      {/* Quick FAQ / Help Note */}
      <div className="w-full md:max-w-2xl bg-surface border border-border-light rounded-2xl p-6 shadow-sm flex items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-heading text-sm">
            Need to shorten a link right now?
          </h4>
          <p className="text-muted text-xs mt-0.5">
            Generate short links instantly with zero sign-up required.
          </p>
        </div>
        <Link
          href="/shorten"
          className=" bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-full transition whitespace-nowrap"
        >
          Try Now →
        </Link>
      </div>
    </div>
  );
}
