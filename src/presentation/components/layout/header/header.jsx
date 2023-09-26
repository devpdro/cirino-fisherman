import { CarouselImages } from './carousel-images/carousel-images'
import { Navbar } from './navbar/navbar'

export function Header() {
  return (
    <header>
      <Navbar />
      <CarouselImages />
    </header>
  )
}
