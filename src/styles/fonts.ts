import { Bad_Script, Instrument_Sans, Instrument_Serif } from "next/font/google";

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const badScript = Bad_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bad-script",
});

export const fontClassNames = [
  instrumentSans.variable,
  instrumentSerif.variable,
  badScript.variable,
].join(" ");
