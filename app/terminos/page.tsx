import type { Metadata } from "next";
import LegalPageLayout, { LegalList, LegalSection } from "../components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Escalando Labs",
  description:
    "Condiciones de uso de Escalando Labs para negocios que gestionan conversaciones, clientes, campañas responsables e IA comercial.",
  alternates: {
    canonical: "/terminos",
  },
};

const serviceFeatures = [
  "gestionar conversaciones con clientes;",
  "centralizar historial de mensajes;",
  "administrar clientes y contactos;",
  "configurar información comercial del negocio;",
  "usar asistencia de IA para atención y clasificación;",
  "derivar conversaciones a atención humana;",
  "crear campañas responsables;",
  "enviar mensajes y plantillas por proveedores autorizados;",
  "consultar métricas, estados operativos y actividad del sistema;",
  "integrar automatizaciones mediante servicios externos.",
];

const userDuties = [
  "brindar información verdadera y actualizada;",
  "proteger sus credenciales;",
  "no compartir accesos indebidamente;",
  "usar la plataforma conforme a su rol y permisos;",
  "informar accesos no autorizados o incidentes de seguridad.",
];

const businessResponsibilities = [
  "la información que carga en Escalando Labs;",
  "sus bases de clientes y contactos;",
  "sus campañas y comunicaciones;",
  "los productos, precios, promociones y condiciones que informa;",
  "las respuestas enviadas por operadores humanos;",
  "la configuración de automatizaciones e IA;",
  "cumplir normas de protección de datos, defensa del consumidor, publicidad, comercio electrónico y demás normativa aplicable;",
  "cumplir políticas de Meta, WhatsApp, Twilio u otros proveedores integrados.",
];

const whatsappConditions = [
  "debe cumplir las políticas y términos de WhatsApp Business y Meta;",
  "debe tener autorización o base válida para contactar a sus clientes;",
  "debe respetar ventanas de atención, plantillas aprobadas y reglas de calidad;",
  "no debe enviar spam, contenido engañoso, abusivo, ilegal o prohibido;",
  "el envío, entrega, aprobación de plantillas, calidad del número y límites de mensajería pueden depender de terceros;",
  "Escalando Labs no garantiza aprobación de plantillas, disponibilidad permanente de APIs externas ni resultados específicos de entrega.",
];

const forbiddenUses = [
  "enviar spam;",
  "contactar personas sin autorización o relación válida;",
  "suplantar identidad;",
  "enviar contenido fraudulento o engañoso;",
  "acosar, discriminar o amenazar;",
  "promover actividades ilegales;",
  "evadir reglas de WhatsApp, Meta u otros proveedores;",
  "dañar la reputación, infraestructura o calidad del servicio.",
];

const aiConditions = [
  "la IA puede cometer errores;",
  "las respuestas automáticas deben configurarse y supervisarse;",
  "no debe usarse IA para brindar asesoramiento profesional regulado sin revisión humana;",
  "no debe cargarse información falsa, ilegal, discriminatoria o sensible sin base válida;",
  "los operadores humanos deben intervenir cuando una conversación lo requiera.",
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Términos y Condiciones"
      subtitle="Condiciones de uso de Escalando Labs para negocios, operadores y usuarios de la plataforma."
    >
      <p className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 font-semibold text-[var(--text-strong)]">
        Última actualización: [FECHA DE ÚLTIMA ACTUALIZACIÓN]
      </p>

      <p>
        Estos Términos y Condiciones regulan el acceso y uso de Escalando Labs, una plataforma SaaS
        para gestión de conversaciones, clientes, campañas responsables, automatizaciones e IA
        comercial conectada a canales como WhatsApp.
      </p>
      <p>
        Al acceder o usar Escalando Labs, aceptás estos términos. Si usás la plataforma en nombre
        de un negocio, declarás tener autorización suficiente para aceptar estos términos en
        representación de ese negocio.
      </p>
      <p>
        Escalando Labs es un servicio operado por Germán Argüello, con operación
        principal en Argentina.
      </p>

      <LegalSection title="1. Descripción del servicio">
        <p>Escalando Labs ofrece herramientas para que negocios puedan:</p>
        <LegalList items={serviceFeatures} />
        <p>
          Las funcionalidades pueden cambiar, ampliarse, limitarse o discontinuarse según evolución
          del producto, condiciones técnicas, políticas de terceros o planes contratados.
        </p>
      </LegalSection>

      <LegalSection title="2. Usuarios y cuentas">
        <p>
          Para usar Escalando Labs puede ser necesario iniciar sesión, aceptar una invitación o
          formar parte de un negocio registrado.
        </p>
        <p>El usuario se compromete a:</p>
        <LegalList items={userDuties} />
        <p>
          El negocio usuario es responsable de administrar sus operadores, permisos internos,
          accesos y uso de la plataforma.
        </p>
      </LegalSection>

      <LegalSection title="3. Responsabilidad del negocio usuario">
        <p>El negocio usuario es responsable de:</p>
        <LegalList items={businessResponsibilities} />
        <p>
          Escalando Labs provee tecnología, pero no reemplaza la responsabilidad comercial, legal ni
          operativa del negocio usuario.
        </p>
      </LegalSection>

      <LegalSection title="4. WhatsApp, Meta y proveedores externos">
        <p>
          El uso de WhatsApp mediante Escalando Labs puede depender de Meta WhatsApp Cloud API,
          WhatsApp Business Platform, Twilio u otros proveedores.
        </p>
        <p>El negocio usuario acepta que:</p>
        <LegalList items={whatsappConditions} />
        <p>
          Escalando Labs puede limitar o suspender envíos si detecta riesgo de incumplimiento,
          abuso, baja calidad, reclamos, errores técnicos o uso que pueda perjudicar al servicio.
        </p>
      </LegalSection>

      <LegalSection title="5. Campañas responsables">
        <p>Las campañas deben usarse de forma prudente, legítima y no invasiva.</p>
        <p>Está prohibido usar Escalando Labs para:</p>
        <LegalList items={forbiddenUses} />
        <p>
          El negocio usuario debe atender pedidos de baja, bloqueo, eliminación o no contacto
          cuando corresponda.
        </p>
      </LegalSection>

      <LegalSection title="6. Uso de inteligencia artificial">
        <p>
          Escalando Labs puede incluir funciones de IA para asistir en respuestas, clasificación,
          análisis, resúmenes y gestión comercial.
        </p>
        <p>El negocio usuario acepta que:</p>
        <LegalList items={aiConditions} />
        <p>
          Escalando Labs puede ajustar, limitar o desactivar funciones de IA por motivos de calidad,
          seguridad o cumplimiento.
        </p>
      </LegalSection>

      <LegalSection title="7. Datos y privacidad">
        <p>
          El tratamiento de datos se rige por la Política de Privacidad disponible en
          escalandolabs.com/privacidad.
        </p>
        <p>
          El negocio usuario declara que tiene derecho a cargar, tratar y usar los datos de sus
          clientes dentro de Escalando Labs y que informará a sus clientes cuando corresponda sobre
          el uso de proveedores tecnológicos para atención, mensajería o automatización.
        </p>
      </LegalSection>

      <LegalSection title="8. Disponibilidad y mantenimiento">
        <p>
          Escalando Labs buscará mantener el servicio disponible y estable, pero no garantiza
          disponibilidad ininterrumpida.
        </p>
        <p>El servicio puede verse afectado por:</p>
        <LegalList
          items={[
            "mantenimiento programado o urgente;",
            "errores técnicos;",
            "caídas de proveedores externos;",
            "cambios en APIs de terceros;",
            "problemas de conectividad;",
            "incidentes de seguridad;",
            "límites o bloqueos de Meta, WhatsApp, Twilio u otros proveedores.",
          ]}
        />
        <p>
          Escalando Labs podrá realizar ajustes técnicos para preservar seguridad, rendimiento y
          continuidad del servicio.
        </p>
      </LegalSection>

      <LegalSection title="9. Planes, pagos y facturación">
        <p>
          Escalando Labs podrá ofrecer planes gratuitos, de prueba, pagos mensuales, anuales, por
          uso, por implementación o combinaciones de estos.
        </p>
        <p>
          Las condiciones comerciales específicas, precios, límites, medios de pago, vencimientos y
          alcance del servicio podrán informarse en propuestas, presupuestos, panel de
          administración, sitio web o comunicaciones comerciales.
        </p>
        <p>El acceso a determinadas funcionalidades puede depender del plan contratado y del estado de pago.</p>
      </LegalSection>

      <LegalSection title="10. Cancelación y suspensión">
        <p>
          El negocio usuario puede solicitar la baja del servicio conforme a las condiciones
          comerciales vigentes.
        </p>
        <p>Escalando Labs puede suspender o limitar una cuenta si detecta:</p>
        <LegalList
          items={[
            "incumplimiento de estos términos;",
            "falta de pago;",
            "uso abusivo o riesgoso;",
            "violación de políticas de WhatsApp, Meta u otros proveedores;",
            "riesgo para la seguridad del sistema;",
            "intento de acceso no autorizado;",
            "daño a terceros o a la reputación de la plataforma.",
          ]}
        />
      </LegalSection>

      <LegalSection title="11. Propiedad intelectual">
        <p>
          Escalando Labs, su marca, diseño, software, interfaz, textos, componentes, documentación
          y elementos propios pertenecen a sus titulares y no se transfieren al usuario.
        </p>
        <p>
          El negocio usuario conserva titularidad o responsabilidad sobre los datos, contenidos,
          productos, mensajes, marcas e información que carga en la plataforma.
        </p>
        <p>
          El usuario no puede copiar, revender, descompilar, explotar o usar Escalando Labs para
          crear un servicio competidor sin autorización expresa.
        </p>
      </LegalSection>

      <LegalSection title="12. Limitación de responsabilidad">
        <p>Escalando Labs se ofrece como herramienta tecnológica.</p>
        <p>En la medida permitida por la ley, Escalando Labs no será responsable por:</p>
        <LegalList
          items={[
            "pérdida de ventas, ingresos o reputación;",
            "errores en información cargada por el negocio usuario;",
            "respuestas incorrectas generadas por IA;",
            "campañas mal configuradas por el usuario;",
            "bloqueos, límites o decisiones de Meta, WhatsApp, Twilio u otros proveedores;",
            "interrupciones externas;",
            "uso indebido de la plataforma por usuarios o terceros;",
            "incumplimientos legales o comerciales del negocio usuario.",
          ]}
        />
      </LegalSection>

      <LegalSection title="13. Modificaciones del servicio o de estos términos">
        <p>
          Podemos actualizar estos términos para reflejar cambios técnicos, legales, comerciales o
          de funcionamiento.
        </p>
        <p>
          La versión vigente estará disponible en escalandolabs.com/terminos. El uso continuado del
          servicio luego de una actualización implica aceptación de los cambios, salvo que la ley
          exija otro mecanismo.
        </p>
      </LegalSection>

      <LegalSection title="14. Legislación aplicable">
        <p>
          Estos términos se rigen por las leyes aplicables de la República Argentina, salvo que una
          condición comercial específica indique algo distinto.
        </p>
      </LegalSection>

      <LegalSection title="15. Contacto">
        <p>Para consultas sobre estos términos:</p>
        <p>
          Email: contacto@escalandolabs.com
          <br />
          Sitio web: escalandolabs.com
          <br />
          Operador legal: Germán Argüello
          <br />
          País: Argentina
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
