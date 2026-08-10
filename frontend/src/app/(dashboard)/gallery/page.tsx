import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { ImageCarousel } from '@/features/gallery/components/ImageCarousel'
import type { GalleryImage } from '@/features/gallery/types'

export const metadata: Metadata = {
  title: 'Gallery',
}

const firstSet: GalleryImage[] = [
  { src: '/gallery/Oscar_Piastri_2024_Baku.jpeg', alt: 'Oscar Piastri at the 2024 Baku Grand Prix' },
  { src: '/gallery/Max_Verstappen_2021_Abu_Dhabi.jpg', alt: 'Max Verstappen at the 2021 Abu Dhabi Grand Prix' },
  { src: '/gallery/Fernando_Alonso_2005_Canada.jpg', alt: 'Fernando Alonso at the 2005 Canadian Grand Prix' },
]

const secondSet: GalleryImage[] = [
  {
    src: '/gallery/Oscar_Piastri_2025_Bahrain.jpeg',
    alt: 'Oscar Piastri at the 2025 Bahrain Grand Prix',
    objectPosition: 'object-bottom',
  },
  { src: '/gallery/Max_Verstappen_2024_Brazil.jpg', alt: 'Max Verstappen at the 2024 Brazilian Grand Prix' },
  { src: '/gallery/Fernando_Alonso_2023_Miami.jpg', alt: 'Fernando Alonso at the 2023 Miami Grand Prix' },

]

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Gallery"
        description="A collection of images displayed in a carousel format."
      />
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight">Set One</h2>
          <ImageCarousel images={firstSet} boxClassName="h-[30rem]" />
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight">Set Two</h2>
          <ImageCarousel
            images={secondSet}
            className="w-fit"
            boxClassName="h-[30rem] w-72"
            fit="cover"
            objectPosition="object-top"
          />
        </div>
      </div>
    </div>
  )
}
