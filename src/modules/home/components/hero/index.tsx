import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#E8F5E9] bg-gradient-to-br from-[#F1F8E9] via-[#E8F5E9] to-[#ffffff]">
      <div className="content-container relative z-10 flex min-h-[72vh] flex-col justify-center gap-8 py-20">
        <span className="w-fit rounded-full border border-[#C8E6C9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2E7D32]">
          Corpicia · Jardinería profesional
        </span>

        <div className="max-w-2xl space-y-5">
          <h1 className="text-4xl font-semibold leading-tight text-[#1b5e20] small:text-5xl">
            Césped, riego e insumos premium para transformar cualquier espacio verde.
          </h1>
          <p className="text-base leading-7 text-[#4f5b52] small:text-lg">
            Descubrí productos seleccionados y servicios de instalación para hogares, empresas y proyectos
            paisajísticos.
          </p>
        </div>

        <div className="flex flex-col gap-3 small:flex-row">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center justify-center rounded-xl bg-[#2E7D32] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b5e20]"
          >
            Comprar ahora
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/categories/servicios-de-instalacion"
            className="inline-flex items-center justify-center rounded-xl border border-[#2E7D32] bg-white px-6 py-3 text-sm font-semibold text-[#2E7D32] transition hover:bg-[#E8F5E9]"
          >
            Solicitar asesoría
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
