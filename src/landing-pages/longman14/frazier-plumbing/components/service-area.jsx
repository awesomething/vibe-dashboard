import { ExternalLink, MapPin } from "lucide-react";
import { areas } from "../../lib/utils";
import { COLORS } from "../../lib/utils";

const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=10317840283646066300&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";

export function ServiceAreas() {
    return (
      <section id="service-areas" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2
            style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}
            className="text-3xl md:text-4xl mb-4 max-w-lg"
          >
            Serving Atlanta and nearby communities.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#AEB9CC", lineHeight: 1.65 }} className="mb-9 max-w-md">
            Frazier Plumbing Service of Atlanta provides plumbing services for customers in Atlanta and surrounding communities.
          </p>
          <div className="flex flex-wrap gap-3">
            {areas.map((a) => (
              <div
                key={a}
                className="flex items-center gap-2 px-4 py-2.5 rounded"
                style={{ border: `1px solid ${COLORS.borderDark}` }}
              >
                <MapPin size={14} color={COLORS.blue} />
                <span style={{ fontFamily: "'Inter', sans-serif", color: "#fff", fontSize: "0.88rem" }}>{a}</span>
              </div>
            ))}
          </div>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8"
            style={{ fontFamily: "'Inter', sans-serif", color: COLORS.blue, fontSize: "0.9rem", fontWeight: 700 }}
          >
            View us on Google Maps
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </section>
    );
  }
  