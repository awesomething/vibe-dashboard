// Placeholder chairs — swap in each stylist's real name, photo, and Instagram
// once you have them. Kept to specialty + booking link so the section works
// on day one either way.
const chairs = [
  {
    specialty: "Color & balayage",
    note: "Booking through her own calendar, chair by the front window.",
  },
  {
    specialty: "Precision cutting",
    note: "Trained in both classic and texture-forward cuts.",
  },
  {
    specialty: "Extensions",
    note: "Hand-tied and tape-in, consultations required.",
  },
  {
    specialty: "Curl & texture care",
    note: "A dedicated chair for curl cuts and treatment.",
  },
];

export function Stylists() {
  return (
    <section id="stylists" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <h2 className="font-serif-display text-3xl leading-tight text-[#2B1D14] sm:text-4xl">
              Independent stylists, working under one roof.
            </h2>
            <p className="mt-4 text-[#2B1D14]/65">
              Every chair at Commoner belongs to someone who has spent years
              earning it. They run their own books and their own style — the
              room just gives them somewhere good to work.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[#2B1D14]/15 bg-[#2B1D14]/15 sm:grid-cols-2 lg:grid-cols-4">
          {chairs.map((chair) => (
            <div
              key={chair.specialty}
              className="flex min-h-[280px] flex-col justify-between bg-white p-6"
            >
              <div
                aria-hidden="true"
                className="h-32 w-full border border-[#2B1D14]/15 bg-[linear-gradient(135deg,rgba(169,131,79,0.16),rgba(169,131,79,0.04))]"
              />
              <div className="mt-6">
                <h3 className="font-serif-display text-xl text-[#2B1D14]">
                  {chair.specialty}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2B1D14]/60">
                  {chair.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
