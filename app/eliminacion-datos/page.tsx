import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout, { LegalList, LegalSection } from "../components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Eliminación de datos | Escalando Labs",
  description:
    "Instrucciones para solicitar la eliminación de datos personales asociados al uso de Escalando Labs.",
  alternates: {
    canonical: "/eliminacion-datos",
  },
};

export default function DataDeletionPage() {
  return (
    <LegalPageLayout
      title="Eliminación de datos de usuario"
      subtitle="Instrucciones para solicitar la eliminación de datos personales asociados al uso de Escalando Labs."
    >
      <p className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 font-semibold text-[var(--text-strong)]">
        Última actualización: 11 de junio de 2026
      </p>

      <p>
        En Escalando Labs respetamos el derecho de las personas a solicitar la eliminación de sus
        datos personales cuando corresponda.
      </p>

      <p>
        Esta página explica cómo podés pedir la eliminación de datos asociados al uso de Escalando
        Labs, ya sea como usuario de la plataforma, integrante de un negocio registrado o contacto
        final que interactuó por WhatsApp con un negocio que utiliza nuestra tecnología.
      </p>

      <p>
        Escalando Labs es un servicio operado por Germán Argüello, con operación principal en
        Argentina.
      </p>

      <LegalSection title="Cómo solicitar la eliminación">
        <p>Para solicitar la eliminación de datos, escribinos a:</p>
        <p className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 text-xl font-semibold text-[var(--text-strong)]">
          contacto@escalandolabs.com
        </p>
        <p>
          Asunto sugerido:{" "}
          <span className="font-semibold text-[var(--text-strong)]">
            Solicitud de eliminación de datos
          </span>
        </p>
      </LegalSection>

      <LegalSection title="Información que conviene incluir">
        <p>En el mensaje, incluí la mayor cantidad posible de la siguiente información:</p>
        <LegalList
          items={[
            "nombre y apellido;",
            "email de contacto;",
            "número de WhatsApp asociado, si corresponde;",
            "nombre del negocio con el que interactuaste, si corresponde;",
            "si sos usuario de la plataforma, operador de un negocio o contacto final;",
            "descripción clara de qué datos solicitás eliminar.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Revisión de la solicitud">
        <p>
          Una vez recibida la solicitud, revisaremos la información y podremos pedir datos
          adicionales para verificar identidad, titularidad o relación con el negocio
          correspondiente.
        </p>
        <p>
          Si sos contacto final de un negocio que usa Escalando Labs, es posible que debamos
          coordinar la solicitud con ese negocio, ya que el negocio puede ser el responsable
          principal de la relación comercial y de los datos cargados en la plataforma.
        </p>
        <p>
          Cuando corresponda, Escalando Labs eliminará, anonimizará o bloqueará los datos
          solicitados dentro de un plazo razonable, salvo que exista una obligación legal,
          contractual, de seguridad, auditoría o prevención de abuso que justifique conservar cierta
          información.
        </p>
      </LegalSection>

      <LegalSection title="Política de Privacidad">
        <p>
          También podés consultar nuestra Política de Privacidad en{" "}
          <Link href="/privacidad" className="font-semibold text-[var(--brand-cyan)] hover:text-[var(--text-strong)]">
            /privacidad
          </Link>
          .
        </p>
        <p>
          Allí explicamos qué datos podemos tratar, para qué los usamos, qué proveedores intervienen
          y qué derechos pueden ejercer los usuarios.
        </p>
      </LegalSection>

      <LegalSection title="Canal oficial para solicitudes">
        <p>
          Email: contacto@escalandolabs.com
          <br />
          Sitio web: escalandolabs.com
          <br />
          País: Argentina
        </p>
      </LegalSection>

      <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Documentos relacionados
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link
            href="/privacidad"
            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-strong)]"
          >
            Política de Privacidad
          </Link>
          <Link
            href="/terminos"
            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-strong)]"
          >
            Términos y Condiciones
          </Link>
          <Link
            href="/contacto"
            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-strong)]"
          >
            Contacto
          </Link>
        </div>
      </div>
    </LegalPageLayout>
  );
}
