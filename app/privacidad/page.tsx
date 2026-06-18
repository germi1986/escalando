import type { Metadata } from "next";
import LegalPageLayout, { LegalList, LegalSection } from "../components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | Escalando Labs",
  description:
    "Conocé cómo Escalando Labs recopila, usa y protege datos en su plataforma SaaS para WhatsApp, IA comercial, clientes y campañas responsables.",
  alternates: {
    canonical: "/privacidad",
  },
};

const accountData = [
  "nombre;",
  "email;",
  "foto de perfil si el proveedor de login la entrega;",
  "identificador de usuario;",
  "negocio asociado;",
  "rol o permisos dentro del negocio;",
  "preferencias de uso de la plataforma.",
];

const businessData = [
  "nombre del negocio;",
  "rubro;",
  "datos de contacto;",
  "configuración comercial;",
  "horarios de atención;",
  "productos, servicios, promociones o información cargada voluntariamente;",
  "criterios de derivación a atención humana;",
  "configuración de campañas, plantillas y comunicaciones.",
];

const contactData = [
  "nombre;",
  "número de WhatsApp o teléfono;",
  "notas comerciales;",
  "etiquetas;",
  "historial de conversación;",
  "estado del cliente;",
  "campañas recibidas;",
  "respuestas, consultas, reclamos o pedidos;",
  "información necesaria para atención, soporte, venta o seguimiento comercial.",
];

const messageData = [
  "mensajes entrantes y salientes;",
  "fecha y hora de los mensajes;",
  "número de origen y destino;",
  "estado de entrega;",
  "contenido de conversaciones;",
  "clasificación operativa o comercial;",
  "derivaciones a atención humana;",
  "respuestas generadas o asistidas por IA;",
  "registros técnicos asociados al envío o recepción.",
];

const technicalData = [
  "dirección IP;",
  "navegador;",
  "dispositivo;",
  "sistema operativo;",
  "registros de acceso;",
  "eventos de seguridad;",
  "errores técnicos;",
  "actividad dentro de la plataforma;",
  "identificadores internos necesarios para auditoría, prevención de abuso y operación.",
];

const dataUses = [
  "prestar el servicio SaaS;",
  "permitir que negocios gestionen conversaciones con sus clientes;",
  "enviar, recibir y registrar mensajes de WhatsApp;",
  "administrar campañas responsables solicitadas por los negocios usuarios;",
  "mostrar conversaciones, clientes, historial y métricas;",
  "permitir intervención humana cuando corresponda;",
  "configurar y mejorar la IA comercial del negocio;",
  "generar respuestas asistidas por IA bajo instrucciones del negocio usuario;",
  "operar webhooks, automatizaciones y procesos internos;",
  "brindar soporte técnico y comercial;",
  "prevenir fraude, abuso, spam o uso indebido;",
  "auditar acciones relevantes;",
  "cumplir obligaciones legales, contractuales y de seguridad;",
  "mejorar la estabilidad, rendimiento y experiencia de la plataforma.",
];

const aiUses = [
  "responder consultas comerciales;",
  "clasificar mensajes;",
  "detectar necesidad de atención humana;",
  "resumir conversaciones;",
  "sugerir respuestas;",
  "analizar intención comercial;",
  "mejorar la atención del negocio.",
];

const providers = [
  "Supabase, para base de datos, autenticación, almacenamiento y funciones relacionadas;",
  "n8n, para automatizaciones, webhooks y orquestación de procesos;",
  "Meta / WhatsApp Business Platform, para mensajería de WhatsApp;",
  "Twilio, mientras continúe activo como proveedor transitorio o fallback;",
  "proveedores de hosting, infraestructura, monitoreo, correo electrónico, analítica técnica, seguridad y pagos;",
  "proveedores de IA o procesamiento de lenguaje, cuando se usen funciones inteligentes de atención o análisis.",
];

const campaignDuties = [
  "contar con autorización, relación comercial previa u otra base válida para contactar a sus clientes;",
  "respetar políticas de WhatsApp, Meta y demás proveedores;",
  "evitar spam, abuso, mensajes engañosos o comunicaciones prohibidas;",
  "responder pedidos de baja, bloqueo o eliminación cuando correspondan;",
  "usar plantillas aprobadas cuando las reglas de WhatsApp lo exijan;",
  "cuidar la calidad y pertinencia de sus comunicaciones.",
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      subtitle="Cómo Escalando Labs recopila, usa, protege y administra datos en su plataforma."
    >
      <p className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 font-semibold text-[var(--text-strong)]">
        Última actualización: 11 de junio de 2026
      </p>

      <p>
        Esta Política de Privacidad describe cómo Escalando Labs recopila, utiliza, almacena,
        protege y comparte información cuando una persona visita nuestro sitio web, utiliza
        nuestra plataforma, se comunica con nosotros o interactúa con negocios que usan Escalando
        Labs para gestionar conversaciones y comunicaciones comerciales.
      </p>

      <p>
        Escalando Labs es un servicio operado por Germán Argüello, con operación
        principal en Argentina. En esta política, “Escalando Labs”, “nosotros” o “la plataforma”
        se refiere al servicio disponible en escalandolabs.com y dominios relacionados.
      </p>

      <p>
        Si tenés consultas sobre esta política o querés ejercer derechos sobre tus datos, podés
        escribirnos a contacto@escalandolabs.com.
      </p>

      <LegalSection title="1. Alcance de esta política">
        <p>Esta política aplica a:</p>
        <LegalList
          items={[
            "visitantes del sitio web escalandolabs.com;",
            "usuarios registrados o administradores de negocios que usan Escalando Labs;",
            "operadores, empleados o colaboradores invitados por un negocio usuario;",
            "contactos finales que interactúan por WhatsApp u otros canales con negocios que usan Escalando Labs;",
            "personas que se comunican con Escalando Labs por email, formularios o canales comerciales.",
          ]}
        />
        <p>
          Escalando Labs funciona como plataforma tecnológica para negocios. En muchos casos, el
          negocio usuario es responsable de la relación comercial con sus propios clientes y
          contactos finales, mientras que Escalando Labs actúa como proveedor tecnológico o
          encargado de tratamiento para prestar el servicio.
        </p>
      </LegalSection>

      <LegalSection title="2. Información que podemos recopilar">
        <p>
          Podemos recopilar las siguientes categorías de datos, según el tipo de usuario y el uso
          del servicio:
        </p>
        <h3 className="text-lg font-semibold text-[var(--text-strong)]">a. Datos de cuenta y autenticación</h3>
        <LegalList items={accountData} />
        <h3 className="text-lg font-semibold text-[var(--text-strong)]">b. Datos del negocio usuario</h3>
        <LegalList items={businessData} />
        <h3 className="text-lg font-semibold text-[var(--text-strong)]">c. Datos de contactos finales</h3>
        <p>Los negocios usuarios pueden cargar o generar datos de sus contactos, por ejemplo:</p>
        <LegalList items={contactData} />
        <h3 className="text-lg font-semibold text-[var(--text-strong)]">d. Mensajes y conversaciones</h3>
        <p>Cuando un negocio usa Escalando Labs para gestionar WhatsApp u otros canales, podemos procesar:</p>
        <LegalList items={messageData} />
        <h3 className="text-lg font-semibold text-[var(--text-strong)]">e. Datos técnicos y de seguridad</h3>
        <p>Podemos recopilar:</p>
        <LegalList items={technicalData} />
        <h3 className="text-lg font-semibold text-[var(--text-strong)]">f. Datos de facturación o contratación</h3>
        <p>
          Cuando se implementen pagos o suscripciones, podremos tratar datos necesarios para
          presupuestos, facturación, cobranza, planes contratados, estado de pago y soporte
          administrativo. Los datos completos de medios de pago, si existieran, serán procesados
          por proveedores externos de pago y no se almacenarán directamente en Escalando Labs salvo
          que se indique lo contrario.
        </p>
      </LegalSection>

      <LegalSection title="3. Cómo usamos la información">
        <p>Utilizamos los datos para:</p>
        <LegalList items={dataUses} />
      </LegalSection>

      <LegalSection title="4. Uso de WhatsApp, Meta y proveedores de mensajería">
        <p>
          Escalando Labs puede integrarse con WhatsApp Business Platform, Meta WhatsApp Cloud API y
          otros proveedores de comunicación autorizados.
        </p>
        <p>
          Cuando un negocio conecta o utiliza WhatsApp desde Escalando Labs, ciertos datos pueden
          ser tratados por Meta Platforms, WhatsApp, Twilio u otros proveedores necesarios para
          enviar, recibir, entregar y administrar mensajes, plantillas, estados, webhooks y cuentas
          de WhatsApp Business.
        </p>
        <p>
          Los negocios usuarios son responsables de cumplir las políticas aplicables de WhatsApp
          Business, obtener las autorizaciones o bases legales necesarias para contactar a sus
          clientes, respetar solicitudes de baja y evitar comunicaciones no solicitadas, abusivas o
          prohibidas.
        </p>
        <p>
          Escalando Labs no controla las políticas de privacidad de Meta, WhatsApp, Twilio u otros
          proveedores externos. Cada proveedor puede tratar datos conforme a sus propios términos,
          políticas y contratos aplicables.
        </p>
      </LegalSection>

      <LegalSection title="5. Uso de IA">
        <p>Escalando Labs puede usar modelos de inteligencia artificial para asistir en tareas como:</p>
        <LegalList items={aiUses} />
        <p>
          La IA se utiliza como herramienta de asistencia. El negocio usuario conserva
          responsabilidad sobre la información que carga, la configuración de su atención, sus
          campañas y las comunicaciones realizadas con sus clientes.
        </p>
        <p>
          Escalando Labs busca evitar que la IA actúe fuera del contexto configurado por el negocio,
          pero no garantiza que toda respuesta automática sea perfecta, completa o libre de errores.
          Los negocios deben revisar y supervisar el uso de automatizaciones e IA, especialmente en
          situaciones sensibles, reclamos, pedidos, pagos o decisiones importantes.
        </p>
        <p>
          No vendemos conversaciones ni datos personales para entrenar modelos de terceros. Si en el
          futuro se usan datos para mejorar modelos propios o analítica agregada, se hará de forma
          compatible con esta política, con medidas de minimización y, cuando corresponda,
          anonimización o agregación.
        </p>
      </LegalSection>

      <LegalSection title="6. Proveedores externos">
        <p>Para operar el servicio podemos utilizar proveedores como:</p>
        <LegalList items={providers} />
        <p>
          Compartimos con estos proveedores solo la información necesaria para operar el servicio,
          mantener seguridad, cumplir obligaciones o prestar funcionalidades contratadas.
        </p>
      </LegalSection>

      <LegalSection title="7. Campañas y comunicaciones comerciales">
        <p>
          Escalando Labs permite que negocios usuarios realicen comunicaciones a sus contactos,
          siempre bajo responsabilidad del negocio usuario.
        </p>
        <p>Los negocios deben:</p>
        <LegalList items={campaignDuties} />
        <p>
          Escalando Labs puede suspender, limitar o bloquear funcionalidades si detecta abuso,
          riesgo técnico, incumplimiento de políticas, reclamos o uso que pueda afectar a la
          plataforma, a otros negocios o a usuarios finales.
        </p>
      </LegalSection>

      <LegalSection title="8. Conservación de datos">
        <p>Conservamos los datos durante el tiempo necesario para:</p>
        <LegalList
          items={[
            "prestar el servicio;",
            "mantener historial operativo de conversaciones y campañas;",
            "cumplir obligaciones legales, contables o contractuales;",
            "resolver reclamos o disputas;",
            "prevenir abuso o fraude;",
            "mantener registros de auditoría y seguridad.",
          ]}
        />
        <p>
          Los negocios usuarios pueden solicitar eliminación o exportación de información conforme
          al plan contratado, la configuración disponible y las obligaciones legales aplicables.
        </p>
        <p>
          Algunos datos pueden conservarse por períodos adicionales cuando sea necesario para
          seguridad, auditoría, cumplimiento legal, respaldo o defensa ante reclamos.
        </p>
      </LegalSection>

      <LegalSection title="9. Seguridad">
        <p>
          Aplicamos medidas técnicas y organizativas razonables para proteger la información,
          incluyendo controles de acceso, separación por negocio, autenticación, políticas de
          permisos, registros de auditoría, protección de secretos y buenas prácticas de
          infraestructura.
        </p>
        <p>
          Sin embargo, ningún sistema es completamente infalible. Los usuarios deben proteger sus
          credenciales, limitar accesos internos, revisar permisos y avisarnos ante cualquier
          sospecha de uso no autorizado.
        </p>
      </LegalSection>

      <LegalSection title="10. Derechos sobre datos personales">
        <p>Las personas pueden solicitar, cuando corresponda:</p>
        <LegalList
          items={[
            "acceso a sus datos personales;",
            "rectificación o actualización;",
            "supresión;",
            "oposición o limitación cuando resulte aplicable;",
            "información sobre el tratamiento realizado.",
          ]}
        />
        <p>
          Para ejercer estos derechos, podés escribir a contacto@escalandolabs.com indicando tu
          nombre, dato de contacto, relación con Escalando Labs o con el negocio usuario y el
          detalle de tu solicitud.
        </p>
        <p>
          Si sos contacto final de un negocio que usa Escalando Labs, es posible que debamos derivar
          o coordinar tu solicitud con ese negocio, ya que puede ser el responsable principal de la
          relación comercial y de los datos cargados en la plataforma.
        </p>
      </LegalSection>

      <LegalSection title="11. Eliminación de datos">
        <p>Podés solicitar eliminación de datos escribiendo a contacto@escalandolabs.com.</p>
        <p>
          Cuando corresponda, Escalando Labs evaluará la solicitud y eliminará, anonimizará o
          bloqueará los datos, salvo que exista una obligación legal, contractual, de seguridad o
          auditoría que justifique conservarlos.
        </p>
        <p>
          Los negocios usuarios también pueden solicitar baja de su cuenta o eliminación de datos
          conforme a las condiciones comerciales y técnicas vigentes.
        </p>
      </LegalSection>

      <LegalSection title="12. Transferencias internacionales">
        <p>
          Algunos proveedores tecnológicos pueden procesar o almacenar datos en otros países. Al
          usar Escalando Labs, aceptás que los datos puedan ser tratados por proveedores ubicados
          fuera de Argentina, siempre con fines vinculados a la prestación, seguridad y operación
          del servicio.
        </p>
      </LegalSection>

      <LegalSection title="13. Menores de edad">
        <p>
          Escalando Labs está dirigido a negocios y usuarios comerciales. No está diseñado para ser
          utilizado directamente por menores de edad. Si detectamos información de menores tratada
          indebidamente, podremos eliminarla o tomar medidas razonables conforme corresponda.
        </p>
      </LegalSection>

      <LegalSection title="14. Cambios en esta política">
        <p>
          Podemos actualizar esta Política de Privacidad para reflejar cambios legales, técnicos,
          comerciales o de funcionamiento de la plataforma.
        </p>
        <p>
          La versión vigente estará disponible en escalandolabs.com/privacidad. Si los cambios son
          relevantes, podremos notificarlos por medios razonables.
        </p>
      </LegalSection>

      <LegalSection title="15. Contacto">
        <p>Para consultas de privacidad, seguridad o eliminación de datos:</p>
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
