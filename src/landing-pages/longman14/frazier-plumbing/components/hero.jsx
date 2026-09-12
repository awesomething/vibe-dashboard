"use client"

import { COLORS } from "../../lib/utils";
import { CallButton } from "./call-button";
import { RequestButton } from "./request-button";
import { HERO_IMG } from "../../lib/utils";
import { Clock } from "lucide-react";

export function Hero() {
    return (
      <section className="w-full" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h1
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                color: COLORS.ink,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              className="text-4xl md:text-5xl mb-5"
            >
              Reliable plumbing service when you need it most.
            </h1>
            <p
              style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, lineHeight: 1.6 }}
              className="text-base md:text-lg mb-7 max-w-md"
            >
              Professional plumbing services for homeowners and businesses throughout Atlanta. From everyday repairs to urgent plumbing problems, Frazier Plumbing Service is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <CallButton size="lg" />
              <RequestButton variant="outline" />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, fontSize: "0.85rem" }} className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Serving Atlanta</span>
              <span style={{ color: COLORS.border }}>•</span>
              <span>Fast Response</span>
              <span style={{ color: COLORS.border }}>•</span>
              <span>Professional Service</span>
            </p>
          </div>
          <div className="relative">
            <img
              src={HERO_IMG}
              alt="Plumber repairing a pipe inside a residential wall"
              className="w-full h-[320px] md:h-[440px] object-cover rounded"
            />
            <div
              className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 px-5 py-4 rounded"
              style={{ backgroundColor: COLORS.navy }}
            >
              <Clock size={20} color="#fff" />
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#fff", fontWeight: 600, fontSize: "0.88rem" }}>
                  Fast response
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#B9C3D6", fontSize: "0.78rem" }}>
                  Atlanta &amp; nearby areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  