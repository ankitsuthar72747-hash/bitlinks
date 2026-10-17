// app/about/page.js
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Us - BitLinks",
  description: "Learn more about BitLinks, our mission, and our values.",
};

export default function About() {
  return (
    <div className="md:max-w-6xl w-full py-6 px-3  md:mx-auto md:px-6 md:py-12 flex flex-col items-center not-md:pl-2 ">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-heading tracking-tight mb-4">
          Built for speed, simplicity & privacy
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          BitLinks was born from a simple belief: shortening and sharing links
          should never be complicated, slow, or filled with spammy redirect ads.
        </p>
      </div>

      {/* 3 Core Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        {/* Card 1 */}
        <div className="bg-surface border border-border-light rounded-2xl p-7 shadow-card flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-2xl mb-5">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-heading mb-2">Privacy First</h3>
            <p className="text-body text-sm leading-relaxed">
              We respect your data. No unnecessary tracking cookies, no selling your analytics, and zero annoying interstitial ads before redirection.
            </p>
          </div>
          <div className="mt-6 text-xs font-semibold text-primary uppercase tracking-wider">
            01 / Security
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-surface border border-border-light rounded-2xl p-7 shadow-card flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-2xl mb-5">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-heading mb-2">Blazing Fast</h3>
            <p className="text-body text-sm leading-relaxed">
              Engineered for high performance. Redirections happen in under 50 milliseconds so your visitors reach their destination immediately.
            </p>
          </div>
          <div className="mt-6 text-xs font-semibold text-primary uppercase tracking-wider">
            02 / Performance
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-surface border border-border-light rounded-2xl p-7 shadow-card flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-2xl mb-5">
              🎁
            </div>
            <h3 className="text-xl font-bold text-heading mb-2">100% Free</h3>
            <p className="text-body text-sm leading-relaxed">
              Generate as many short links and custom aliases as you need. No hidden fees, subscription paywalls, or surprise expiration dates.
            </p>
          </div>
          <div className="mt-6 text-xs font-semibold text-primary uppercase tracking-wider">
            03 / Accessibility
          </div>
        </div>
      </div>

      {/* Stats Highlight Banner */}
      <div className="w-full bg-surface border border-border-light rounded-2xl p-8 shadow-card flex flex-col md:flex-row items-center justify-around gap-6 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-extrabold text-heading">100,000+</div>
          <div className="text-muted text-sm font-medium mt-1">Links Shortened</div>
        </div>
        <div className="hidden md:block w-px h-12 bg-border-light"></div>
        <div>
          <div className="text-3xl md:text-4xl font-extrabold text-primary">99.9%</div>
          <div className="text-muted text-sm font-medium mt-1">Uptime Reliability</div>
        </div>
        <div className="hidden md:block w-px h-12 bg-border-light"></div>
        <div>
          <div className="text-3xl md:text-4xl font-extrabold text-success">&lt; 50ms</div>
          <div className="text-muted text-sm font-medium mt-1">Average Redirect Speed</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-14 text-center">
        <h3 className="text-xl font-bold text-heading mb-3">Ready to simplify your links?</h3>
        <Link
          href="/shorten"
          className="not-md:mb-20 inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-full transition shadow-sm mb-10"
        >
          Shorten a URL Now →
        </Link>
      </div>
    </div>
  );
}