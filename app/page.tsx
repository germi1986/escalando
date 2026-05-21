export default function EscalandoLabsLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none animate-pulse">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/[0.06] bg-black/50 supports-[backdrop-filter]:bg-black/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
            <span className="text-lg tracking-[0.25em] font-semibold uppercase text-white/95">
              Escalando Labs
            </span>
          </div>

          <button className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all text-sm text-white/80">
            Contacto
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/65 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Automatización comercial con IA
              </div>

              <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.95] max-w-4xl">
                Convertimos tu WhatsApp en un sistema automático de ventas y seguimiento.
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-white/60 max-w-2xl">
                Diseñamos sistemas conversacionales inteligentes para negocios que venden, atienden y hacen seguimiento por WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <a
  href="https://wa.me/5491153230859"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 rounded-2xl bg-white text-black font-medium text-lg hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 inline-flex items-center justify-center"
>
  Hablar por WhatsApp ↗
</a>

                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white/80 text-lg hover:bg-white/[0.05] transition-all duration-300">
                  Ver demostración
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mt-12 text-sm text-white/45">
                {[
                  'Seguimiento automático',
                  'IA conversacional',
                  'Integraciones',
                  'WhatsApp Business',
                  'Automatización comercial',
                ].map((tag, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* MOCKUP */}
            <div className="relative">
              <div className="absolute -inset-10 bg-emerald-500/10 blur-3xl rounded-full animate-pulse" />

              <div className="relative rounded-[32px] border border-white/10 bg-[#0B0B0B]/90 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] hover:scale-[1.01] transition-all duration-500">
                <div className="h-14 border-b border-white/10 flex items-center px-6 gap-3 bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>

                <div className="p-6 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-black p-4">
                    <div className="text-sm text-white/40 mb-3">
                      Cliente · 14:32
                    </div>

                    <div className="text-white/85 leading-relaxed">
                      Hola! Quería saber si todavía tienen turnos disponibles para esta semana.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.08] p-4 ml-10">
                    <div className="text-sm text-emerald-300/70 mb-3">
                      IA · Respondido automáticamente
                    </div>

                    <div className="text-white/90 leading-relaxed">
                      ¡Hola! Sí 😊 Tenemos disponibilidad para jueves y viernes. ¿Querés que te muestre los horarios disponibles?
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-white/40 text-sm">
                        Tiempo de respuesta
                      </div>

                      <div className="text-3xl font-semibold mt-3">
                        -92%
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-white/40 text-sm">
                        Conversaciones activas
                      </div>

                      <div className="text-3xl font-semibold mt-3">
                        24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-5">
              Problema
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
              La mayoría de los negocios pierden ventas por desorden en WhatsApp.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              'Respuestas tardías',
              'Clientes olvidados',
              'Seguimientos inexistentes',
              'Consultas repetidas',
              'WhatsApp saturado',
              'Cero organización comercial',
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/10 mb-6" />

                <div className="text-2xl font-medium text-white/90 leading-snug">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCION */}
      <section className="border-y border-white/[0.06] bg-white/[0.015] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-5">
              Solución
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
              Sistemas conversacionales diseñados para vender y hacer seguimiento.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: 'Atención automática con IA',
                text: 'Respondemos consultas de forma natural, rápida y humana, incluso fuera de horario.',
              },
              {
                title: 'Seguimiento inteligente',
                text: 'Reactivamos clientes y retomamos conversaciones automáticamente.',
              },
              {
                title: 'Clasificación y scoring',
                text: 'Detectamos interés, intención y organizamos conversaciones.',
              },
              {
                title: 'Integraciones a medida',
                text: 'Conectamos WhatsApp con Sheets, pagos, CRMs y APIs.',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-black/60 backdrop-blur-xl p-10 hover:border-emerald-500/20 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.08] mb-8" />

                <h3 className="text-3xl font-medium tracking-[-0.03em] mb-5">
                  {card.title}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RUBROS */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-5">
              Rubros
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
              Ideal para negocios que venden por conversación.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 mt-16">
            {[
              'Restaurantes',
              'Peluquerías',
              'Veterinarias',
              'Peluquerías caninas',
              'Indumentaria',
              'Perfumerías',
              'Distribuidoras',
              'Editoriales',
              'Comercios locales',
              'Servicios',
            ].map((tag, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white/75 hover:bg-white/[0.05] transition-all"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-32 px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-14 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-3xl rounded-full animate-pulse" />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] leading-tight max-w-4xl mx-auto">
              Tu negocio ya tiene clientes escribiendo.
              <br />
              El problema es todo lo que pasa después.
            </h2>

            <p className="mt-8 text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Automatizá atención, seguimiento y recuperación de clientes sin perder el trato humano.
            </p>

            <a
  href="https://wa.me/5491153230859"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 rounded-2xl bg-white text-black font-medium text-lg hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 inline-flex items-center justify-center"
>
  Hablar por WhatsApp ↗
</a>
          </div>
        </div>
      </section>
    </div>
  )
}

