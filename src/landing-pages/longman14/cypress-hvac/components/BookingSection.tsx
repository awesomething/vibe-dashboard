import { PhoneCall } from "lucide-react";
import { site } from "../utils";
import { BookingCard } from "./BookingCard";

export function BookingSection() {
  return (
    <section aria-labelledby="booking-heading" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="max-w-md">
          <p className="text-xs font-bold uppercase tracking-wider text-brand">Book online</p>
          <h2 id="booking-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Let&apos;s get your comfort back.
          </h2>
          <p className="mt-4 leading-relaxed text-ink/65">
            Tell us what is happening and when you need help. We&apos;ll call or text to confirm your
            arrival window.
          </p>
          <a
            href={`tel:${site.tel}`}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-600"
          >
            <PhoneCall className="size-4" />
            Prefer to call? {site.phone}
          </a>
        </div>
        <BookingCard />
      </div>
    </section>
  );
}
