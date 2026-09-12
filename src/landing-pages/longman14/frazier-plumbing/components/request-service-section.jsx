import { ServiceRequestForm } from "./service-request-form";
import {PHONE_DISPLAY} from "../../lib/utils"
import {COLORS} from "../../lib/utils"

export function RequestServiceSection() {
    return (
      <section id="request-service" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.bgAlt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="md:sticky md:top-28">
            <h2
              style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: COLORS.ink, letterSpacing: "-0.01em" }}
              className="text-3xl md:text-4xl mb-4"
            >
              Need a plumber? Tell us what's going on.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, lineHeight: 1.65 }} className="mb-6 max-w-md">
              Prefer not to call? Send your details and describe the problem. The business can follow up with you to discuss your service request.
            </p>
            <div className="hidden md:flex items-center gap-3">
              <div className="h-px w-10" style={{ backgroundColor: COLORS.border }} />
              <span style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, fontSize: "0.85rem" }}>
                or call {PHONE_DISPLAY}
              </span>
            </div>
          </div>
          <ServiceRequestForm />
        </div>
      </section>
    );
  }
  