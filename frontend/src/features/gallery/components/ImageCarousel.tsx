'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { GalleryImage } from '@/features/gallery/types'

interface ImageCarouselProps {
  images: GalleryImage[]
  /** Tailwind max-width class for the carousel's container. Defaults to a landscape-friendly width. */
  className?: string
  /** Tailwind classes controlling the image box's size (aspect-ratio and/or a fixed height). Defaults to 16:9 landscape. */
  boxClassName?: string
}

export function ImageCarousel({
  images,
  className = 'max-w-3xl',
  boxClassName = 'aspect-video',
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const current = images[index]

  if (!current) return null

  const goTo = (next: number) => setIndex((next + images.length) % images.length)

  return (
    <div className={cn(className, 'space-y-3')}>
      <div
        className={cn(
          boxClassName,
          'relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900',
        )}
      >
        <img src={current.src} alt={current.alt} className="h-full w-full object-cover" />

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => goTo(index - 1)}
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-2.5 text-zinc-900 shadow hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-900"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => goTo(index + 1)}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-2.5 text-zinc-900 shadow hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-900"
            >
              <ChevronRight className="size-6" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-zinc-900 dark:bg-white' : 'bg-zinc-300 dark:bg-zinc-700',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
