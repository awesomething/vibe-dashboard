
export function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-[#2B1D14] pt-16 text-white sm:pt-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:py-28">
        <div className="relative z-10 max-w-xl">
          <p className="text-sm text-[#A9834F]">
            Little Five Points, Atlanta
          </p>

          <h1 className="mt-5 font-serif-display text-[2.75rem] font-normal leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            A hundred years of this room becoming what it needed to be.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            Commoner Salon works out of a restored 1925 post office, later a
            neighborhood woodworking shop for nearly twenty-five years. The
            walls have changed jobs before. Now they hold a room of
            independent stylists who know their craft, on the edge of
            Candler Park.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button>
              <a href="#visit">Book a chair</a>
            </button>
            <button
              
              
              className="border-white/30 text-white hover:border-white hover:bg-white/10"
    
            >
              <a href="#story">Read the building&apos;s story</a>
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <img
            src="/7720.jpg"
            alt="Luxury armchairs inside a barber shop"
            className="commonerplace-hero-image"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-5 py-5 text-xs text-white/60 sm:px-8">
          <span>1925 — built as a U.S. post office</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
          <span>Later — an independent woodworking shop, ~25 years</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
          <span>Today — Commoner Salon</span>
        </div>
      </div>
    </section>
  );
}
