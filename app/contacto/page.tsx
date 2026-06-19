import type { Metadata } from "next";
import LegalPageLayout, { LegalList, LegalSection } from "../components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Contacto | Escalando Labs",
  description:
    "Canales oficiales de contacto de Escalando Labs para consultas comerciales, soporte, privacidad y seguridad.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactPage() {
  return (
    <LegalPageLayout
      title="Contacto"
      subtitle="Canales oficiales para comunicarte con Escalando Labs."
      eyebrow="Contacto oficial"
    >
      <p>
        Escalando Labs es una plataforma SaaS para negocios que quieren gestionar conversaciones,
        clientes, campañas responsables, atención humana e IA comercial conectada a WhatsApp.
      </p>

      <LegalSection title="Canal principal">
        <p>
          Para consultas comerciales, soporte, privacidad, seguridad o solicitudes relacionadas con
          datos personales, podés escribirnos a:
        </p>
        <a
          href="mailto:contacto@escalandolabs.com"
          className="block rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 text-xl font-semibold text-[var(--text-strong)] transition hover:border-[var(--border-strong)]"
        >
          contacto@escalandolabs.com
        </a>
      </LegalSection>

      <LegalSection title="Información del servicio">
        <p>
          Nombre comercial: Escalando Labs
          <br />
          Sitio web: escalandolabs.com
          <br />
          País de operación principal: Argentina
          <br />
          Operador legal: Germán Argüello
          <br />
          Domicilio legal: [DOMICILIO LEGAL, SI CORRESPONDE]
          <br />
          Identificación fiscal: [IDENTIFICACIÓN FISCAL, SI CORRESPONDE]
        </p>
      </LegalSection>

      <LegalSection title="Si sos cliente final de un negocio">
        <p>
          Si sos cliente final de un negocio que usa Escalando Labs y querés consultar por una
          conversación, pedido, campaña, baja o eliminación de datos, indicanos:
        </p>
        <LegalList
          items={[
            "tu número de WhatsApp;",
            "el nombre del negocio con el que interactuaste;",
            "el motivo de tu consulta;",
            "un email o canal de respuesta.",
          ]}
        />
        <p>
          Escalando Labs podrá coordinar la solicitud con el negocio correspondiente cuando ese
          negocio sea el responsable principal de la relación comercial o de los datos cargados en
          la plataforma.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
