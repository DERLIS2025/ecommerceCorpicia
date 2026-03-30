import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <section className="content-container py-10 small:py-14">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Text className="text-2xl font-semibold text-[#1b5e20]">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>Ver todos</InteractiveLink>
      </div>
      <ul className="grid grid-cols-1 gap-6 small:grid-cols-2 lg:grid-cols-3">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </section>
  )
}
