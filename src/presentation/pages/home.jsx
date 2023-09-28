import { Footer } from 'presentation/components/layout/footer/footer'
import { Main } from 'presentation/components/layout/main/main'

import { Header } from '../components/layout/header/header'

export function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
