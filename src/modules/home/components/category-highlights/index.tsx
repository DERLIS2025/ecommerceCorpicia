import LocalizedClientLink from "@modules/common/components/localized-client-link"

const corpiciaCategories = [
  {
    name: "Césped Natural",
    description: "Variedades premium para jardines residenciales y paisajismo comercial.",
    handle: "cesped-natural",
  },
  {
    name: "Césped Sintético",
    description: "Soluciones de bajo mantenimiento para exteriores funcionales y estéticos.",
    handle: "cesped-sintetico",
  },
  {
    name: "Sistemas de Riego",
    description: "Kits y accesorios para automatizar y optimizar el consumo de agua.",
    handle: "sistemas-de-riego",
  },
  {
    name: "Insumos de Jardinería",
    description: "Sustratos, fertilizantes y complementos para mantener tu jardín saludable.",
    handle: "insumos-de-jardineria",
  },
  {
    name: "Servicios de Instalación",
    description: "Acompañamiento profesional para instalación y puesta en marcha.",
    handle: "servicios-de-instalacion",
  },
]

const CategoryHighlights = () => {
  return (
    <section className="content-container py-14" aria-label="Categorías Corpicia">
      <div className="mb-8 flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#43A047]">
          Soluciones por categoría
        </p>
        <h2 className="text-3xl font-semibold text-[#1b5e20]">Todo para tu proyecto de jardinería</h2>
      </div>
      <ul className="grid grid-cols-1 gap-4 small:grid-cols-2 lg:grid-cols-3">
        {corpiciaCategories.map((category) => (
          <li key={category.handle}>
            <LocalizedClientLink
              href={`/categories/${category.handle}`}
              className="group block h-full rounded-2xl border border-[#E8F5E9] bg-white p-6 shadow-[0_8px_24px_rgba(46,125,50,0.08)] transition hover:-translate-y-0.5 hover:border-[#43A047]"
            >
              <h3 className="mb-2 text-lg font-semibold text-[#2E7D32] group-hover:text-[#1b5e20]">
                {category.name}
              </h3>
              <p className="text-sm leading-6 text-[#4f5b52]">{category.description}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[#FFC107]">Explorar categoría →</span>
            </LocalizedClientLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CategoryHighlights
