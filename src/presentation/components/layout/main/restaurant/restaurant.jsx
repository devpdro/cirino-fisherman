import { Portions } from './components/portions'
import { RestaurantThumb } from './components/restaurant-thumb'

export function Restaurant() {
  return (
    <section>
      <RestaurantThumb
        title="Nossa Lanchonete"
        subtitle="Após uma grande sessão de pesca, é ótimo desfrutar de uma refeição
            em um lanchonete local."
      />
      <Portions />
    </section>
  )
}
