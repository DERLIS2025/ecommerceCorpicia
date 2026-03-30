import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      {price.price_type === "sale" && (
        <Text className="text-sm text-[#7a7a7a] line-through" data-testid="original-price">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-base font-semibold text-[#2E7D32]", {
          "text-[#1b5e20]": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
    </div>
  )
}
