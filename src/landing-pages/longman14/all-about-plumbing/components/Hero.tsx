import React from 'react';
import { PhoneCall, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#202322] py-16 sm:py-24 lg:py-28">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#f47d65]/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f47d65]">
              <span className="h-px w-10 bg-[#f47d65]" />
              Atlanta plumbing response team
            </div>
            <h1 className="max-w-xl text-5xl font-extrabold leading-[0.98] tracking-tighter text-[#f4f1e9] sm:text-6xl lg:text-7xl">
              When water turns urgent, <span className="text-[#f47d65]">we move.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#d8d5cb]">
              Fast, dependable plumbing for Atlanta homes and businesses, from emergency leaks to planned upgrades.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:4046365033"
                className="inline-flex h-14 items-center justify-center rounded-md bg-[#f47d65] px-7 text-base font-bold text-[#202322] shadow-[5px_5px_0_#d8f26a] transition-colors hover:bg-[#ff997f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f47d65]"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Call (404) 636-5033
              </a>
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-md border-2 border-[#f4f1e9] bg-[#f4f1e9] px-7 text-base font-bold text-[#202322] transition-colors hover:border-[#f47d65] hover:bg-[#f47d65] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f47d65]"
              >
                Get a free quote
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-[#b7bbb3]">
              <ShieldCheck className="h-5 w-5 text-[#f47d65]" />
              Licensed, insured, and ready for the next call.
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div className="aspect-[1.08] overflow-hidden rounded-2xl border border-[#d8d5cb]/40 bg-[#2b302d] shadow-[14px_14px_0_#f47d65]">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale-20" />
            </div>
            <div className="absolute -bottom-6 -left-5 max-w-60 rounded-xl bg-[#f4f1e9] p-5 text-[#202322] shadow-xl sm:-left-8">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#c65340]">
                <span className="h-2 w-2 rounded-full bg-[#f47d65]" />
                Dispatch status
              </div>
              <p className="text-2xl font-bold tracking-tight">Taking calls now.</p>
              <p className="mt-2 text-sm leading-5 text-[#6f746e]">A real person, a clear arrival window, and no mystery pricing.</p>
            </div>
            <div className="absolute -right-4 -top-5 hidden rounded-full bg-[#d8f26a] px-5 py-3 text-sm font-bold text-[#202322] sm:block">
              24 / 7 response
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 divide-y divide-[#6f746e]/40 border-y border-[#6f746e]/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center gap-3 py-5 sm:pr-6">
            <Clock className="h-6 w-6 text-[#f47d65]" />
            <span className="text-sm font-semibold text-[#f4f1e9]">Prompt service</span>
          </div>
          <div className="flex items-center gap-3 py-5 sm:px-6">
            <ShieldCheck className="h-6 w-6 text-[#f47d65]" />
            <span className="text-sm font-semibold text-[#f4f1e9]">Licensed & insured</span>
          </div>
          <div className="flex items-center gap-3 py-5 sm:pl-6">
            <ThumbsUp className="h-6 w-6 text-[#f47d65]" />
            <span className="text-sm font-semibold text-[#f4f1e9]">Guaranteed work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
