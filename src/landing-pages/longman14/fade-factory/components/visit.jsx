import { ExternalLink, MapPin, Clock } from "lucide-react";
import { COLORS, ADDRESS } from "./constants";

const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=10468248693954556791&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps?cid=10468248693954556791&output=embed";

export function Visit() {
  return (
    <section className="w-full" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid lg:grid-cols-[0.65fr_1.35fr] gap-10 lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <MapPin size={20} color={COLORS.oxblood} className="shrink-0 mt-1" />
            <div>
              <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, color: COLORS.ink, fontSize: "1.05rem" }} className="mb-1">
                Find the shop
              </h3>
              <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.9rem" }}>{ADDRESS}</p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4"
                style={{ fontFamily: "'Jost', sans-serif", color: COLORS.oxblood, fontSize: "0.85rem", fontWeight: 600 }}
              >
                View location and reviews
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock size={20} color={COLORS.oxblood} className="shrink-0 mt-1" />
            <div>
              <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, color: COLORS.ink, fontSize: "1.05rem" }} className="mb-1">
                Hours
              </h3>
              <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.9rem" }}>Tuesday – Saturday, by appointment</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden min-h-70 lg:min-h-105 rounded-2xl" style={{ border: `1px solid ${COLORS.lineOnCream}` }}>
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            title="Fade Factory ATL on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-70 border-0rb rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
