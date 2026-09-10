const eras = [
  {
    year: "1925",
    title: "A post office",
    body: "The building on McLendon Avenue opens as a U.S. post office, built for a neighborhood that was still finding its shape.",
  },
  {
    year: "Decades later",
    title: "A woodworking shop",
    body: "Independently owned and run for nearly twenty-five years, the space fills with sawdust, workbenches, and the particular quiet of people making things with their hands.",
  },
  {
    year: "Today",
    title: "Commoner Salon",
    body: "The restoration keeps what makes the room itself — its scale, its light, its character — and hands it to another set of independent craftspeople.",
  },
];

export function Story() {
  return (
    <section id="story" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <h2 className="font-serif-display text-3xl leading-tight text-[#2B1D14] sm:text-4xl">
            The building kept its name changing, and its character intact.
          </h2>
          <p className="mt-4 text-[#2B1D14]/65">
            In the heart of Little Five Points, bordering Candler Park, the
            structure has been recently restored — three working lives under
            one roof.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-10 border-t border-[#2B1D14]/15 pt-10 sm:grid-cols-3 sm:gap-8">
          {eras.map((era, i) => (
            <li key={era.title} className="relative">
              <div className="flex items-baseline justify-between border-b border-[#2B1D14]/15 pb-4">
                <span className="font-serif-display text-lg text-[#A9834F]">
                  {era.year}
                </span>
                <span className="text-xs text-[#2B1D14]/40">
                  {String(i + 1).padStart(2, "0")} / 03
                </span>
              </div>
              <h3 className="mt-5 font-serif-display text-2xl text-[#2B1D14]">
                {era.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2B1D14]/65">
                {era.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
