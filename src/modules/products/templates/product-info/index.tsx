import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const defaultBenefits = [
  "Calidad profesional para mayor durabilidad",
  "Asesoría técnica para elegir la mejor solución",
  "Entrega y coordinación para proyectos residenciales o comerciales",
]

const ProductInfo = ({ product }: ProductInfoProps) => {
  const whatsappUrl = `https://wa.me/595XXXXXXXX?text=${encodeURIComponent(
    `Hola, quiero consultar sobre ${product.title}`
  )}`

  return (
    <div id="product-info" className="rounded-2xl border border-[#E8F5E9] bg-white p-6 shadow-[0_8px_24px_rgba(46,125,50,0.08)]">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-[#43A047] hover:text-[#2E7D32]"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="text-3xl leading-10 text-[#1b5e20]"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text
          className="text-medium whitespace-pre-line text-[#4f5b52]"
          data-testid="product-description"
        >
          {product.description}
        </Text>

        <div className="rounded-xl border border-[#C8E6C9] bg-[#F1F8E9] p-4">
          <p className="mb-2 text-sm font-semibold text-[#2E7D32]">Beneficios clave</p>
          <ul className="space-y-1 text-sm text-[#37513f]">
            {defaultBenefits.map((benefit) => (
              <li key={benefit}>• {benefit}</li>
            ))}
          </ul>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  )
}

export default ProductInfo
