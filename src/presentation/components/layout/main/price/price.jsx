import { PriceThumb } from './components/price-thumb'
import { RentPrice } from './components/rent-price'

export function Price() {
  return (
    <section>
      <PriceThumb
        title="Preços"
        subtitle="Preços acessíveis que se encaixam perfeitamente no seu orçamento."
      />
      <RentPrice />
    </section>
  )
}
