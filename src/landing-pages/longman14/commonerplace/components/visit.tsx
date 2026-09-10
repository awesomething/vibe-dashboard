
// Hours and the booking email below are placeholders — swap in Commoner's
// real hours and booking contact (or link to their booking software).
export function Visit() {
  return (
    <section id="visit" className="grain bg-[#2B1D14] py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 className="font-serif-display text-3xl leading-tight sm:text-4xl">
            Come sit for a while.
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Booking runs through each stylist individually — tell us what
            you&apos;re after and we&apos;ll point you to the right chair.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button>
              <a href="mailto:hello@commonersalon.com">Book a chair</a>
            </button>
            <button
              
              className="border-white/30 text-white hover:border-white hover:bg-white/10"
             
            >
              <a
                href="http://instagram.com/commonersalon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <div>
            <h3 className="text-sm text-[#A9834F]">Address</h3>
            <p className="mt-3 text-lg leading-relaxed">
              1188 McLendon Avenue NE
              <br />
              Little Five Points, GA 30307
            </p>
            <p className="mt-3 text-sm text-white/60">
              Bordering Candler Park
            </p>
          </div>
          <div>
            <h3 className="text-sm text-[#A9834F]">Hours</h3>
            <p className="mt-3 text-lg leading-relaxed">
              Tuesday – Saturday
              <br />
              By appointment
            </p>
            <p className="mt-3 text-sm text-white/60">
              Hours vary by stylist — confirm when you book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
