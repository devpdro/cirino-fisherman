import { Helmet } from 'react-helmet'

import { WhatsAppButton } from 'utils/whats-app-button'

import { Home } from './presentation/pages/home'

export function App() {
  return (
    <main>
      <Helmet>
        <title>Pesqueiro do Cirino</title>
        <meta
          name="description"
          content="Pesque e Pague São Pedro oferece uma experiência única de pesca em São Pedro, SP. Venha desfrutar de um dia incrível de pesca em um ambiente relaxante."
        />
        <meta
          name="keywords"
          content="pesqueiro, pesque e pague, São Pedro, pescaria, pesca"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Home />
      <WhatsAppButton />
    </main>
  )
}
