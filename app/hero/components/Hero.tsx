'use client'

import { HeroSlideItem } from './Hero_Slide_Item'
import { CarouselArrows } from './Carrousel_Arrows'
import { CarouselDots } from './Carrousel_Dots'
import { useCarousel } from '../hooks/use_carrousel'
import { heroSlides } from '../data/hero_slide.data'

export function Hero() {
  const { current, goTo, next, prev } = useCarousel(heroSlides.length, 5000)

  return (
    <section className="relative w-full h-screen overflow-hidden bg-neutral-900">
      {heroSlides.map((slide, i) => (
        <HeroSlideItem
          key={slide.id}
          slide={slide}
          isActive={i === current}
        />
      ))}

      <CarouselArrows onPrev={prev} onNext={next} />
      <CarouselDots total={heroSlides.length} current={current} onGoTo={goTo} />
    </section>
  )
}