import { Droplets } from "lucide-react";
import { COLORS } from "../../lib/utils";

export function Logo({light}) {
    return (
      <div className="flex items-center gap-2.5">
        <div
          className="flex items-center justify-center w-9 h-9 rounded"
          style={{ backgroundColor: COLORS.blue }}
        >
          <Droplets size={18} color="#fff" strokeWidth={2.25} />
        </div>
        <span
          className="leading-tight"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 800,
            fontSize: "1.05rem",
            color: light ? "#fff" : COLORS.ink,
            letterSpacing: "-0.01em",
          }}
        >
          Frazier Plumbing
          <br />
          <span style={{ fontWeight: 500, fontSize: "0.72rem", color: light ? "#B9C3D6" : COLORS.inkSoft, letterSpacing: "0.02em" }}>
            SERVICE OF ATLANTA
          </span>
        </span>
      </div>
    );
  }