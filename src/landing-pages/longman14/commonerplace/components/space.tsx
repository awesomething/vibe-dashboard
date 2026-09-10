// Swap these gradient placeholders for real photography of the space —
// the captions are written to sit under real images.
const frames = [
  { caption: "The front room, where the old post office windows still frame the street.", tall: true },
  { caption: "Original brick, left exposed through the restoration.", tall: false },
  { caption: "Wide plank floors that outlasted two other businesses.", tall: false },
  { caption: "A quiet corner for color processing.", tall: true },
];

export function Space() {
  return (
    <section id="space" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <h2 className="font-serif-display text-3xl leading-tight text-[#2B1D14] sm:text-4xl">
            The room feels like home, on purpose.
          </h2>
          <p className="mt-4 text-[#2B1D14]/65">
            Nothing about the restoration tried to erase what the building
            had already lived through. It just made room for what&apos;s
            here now.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {frames.map((frame, i) => (
            <figure
              key={frame.caption}
              className={`flex flex-col gap-3 ${
                i === 0 || i === 3 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div
                aria-hidden="true"
                className={`w-full border border-[#2B1D14]/10 bg-[linear-gradient(160deg,rgba(43,29,20,0.9),rgba(169,131,79,0.55))] ${
                  frame.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <figcaption className="text-xs leading-relaxed text-[#2B1D14]/55">
                {frame.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
