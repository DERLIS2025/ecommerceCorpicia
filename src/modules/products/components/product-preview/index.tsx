import { Text } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block h-full">
      <article
        data-testid="product-wrapper"
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8F5E9] bg-white shadow-[0_8px_20px_rgba(46,125,50,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(46,125,50,0.14)]"
      >
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />

        <div className="flex flex-1 flex-col gap-3 p-4">
          <Text
            className="line-clamp-2 text-base font-semibold text-[#1b5e20]"
            data-testid="product-title"
          >
            {product.title}
          </Text>
          <div className="mt-auto flex items-center justify-between">
            <span className="rounded-full bg-[#F1F8E9] px-3 py-1 text-xs font-semibold text-[#2E7D32]">Disponible</span>
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </article>
    </LocalizedClientLink>
  )
}
