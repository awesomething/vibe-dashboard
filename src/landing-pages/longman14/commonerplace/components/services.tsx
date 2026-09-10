import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";


const categories = [
  {
    name: "Cut",
    detail:
      "Consultation, shampoo, cut, and style. Every stylist sets their own pricing — ask for a quote when you book.",
  },
  {
    name: "Color",
    detail:
      "Single process, balayage, foilyage, and corrective color. Longer appointments are scheduled for first-time color guests.",
  },
  {
    name: "Extensions",
    detail:
      "Hand-tied wefts and tape-ins. Starts with a consultation to match method, length, and budget.",
  },
  {
    name: "Treatments",
    detail:
      "Deep conditioning, scalp treatments, and smoothing services, added on or booked on their own.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-serif-display text-3xl leading-tight text-[#2B1D14] sm:text-4xl">
          What&apos;s on offer
        </h2>
        <p className="mt-4 text-[#2B1D14]/65">
          Each stylist at Commoner sets their own menu and pricing. These
          are the categories you&apos;ll find across the room.
        </p>

        <Accordion type="single" collapsible className="mt-10">
          {categories.map((category) => (
            <AccordionItem key={category.name} value={category.name}>
              <AccordionTrigger>{category.name}</AccordionTrigger>
              <AccordionContent>{category.detail}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
