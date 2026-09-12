import { COLORS } from "./constants";

export function Field({ label, required, error, children }) {
  return (
    <div className="mb-4">
      <label style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600, color: COLORS.ink, fontSize: "0.83rem" }} className="block mb-1.5">
        {label}
        {required && <span style={{ color: COLORS.oxblood }}> *</span>}
      </label>
      {children}
      {error && (
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.oxblood, fontSize: "0.76rem" }} className="mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
