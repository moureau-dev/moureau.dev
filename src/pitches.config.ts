export interface PitchConfig {
  id: string;
  name: string;
  title: string;
  description: string;
  sourcePath: string;
}

export const pitches: PitchConfig[] = [
  {
    id: "broto",
    name: "Broto",
    title: "Broto - Complete SaaS Platform in 10 Minutes",
    description: "Build, host, and launch your SaaS in 10 minutes. Complete pipeline with hosting, payments, and 0% fees. From $39/month.",
    sourcePath: "../broto/docs/pitch.md",
  },
];
