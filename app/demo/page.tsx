import type { Metadata } from "next";
import DemoExperience from "./DemoExperience";

export const metadata: Metadata = {
  title: "Demo visual | Escalando Labs",
  description:
    "Mirá cómo Escalando Labs convierte WhatsApp en una operación comercial medible con IA, CRM, campañas responsables y control humano.",
  alternates: {
    canonical: "/demo",
  },
};

export default function DemoPage() {
  return <DemoExperience />;
}
