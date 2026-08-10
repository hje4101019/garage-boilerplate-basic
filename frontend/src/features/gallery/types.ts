export interface GalleryImage {
  src: string
  alt: string
  /** Tailwind object-position class overriding the carousel's default crop anchor for this image, e.g. 'object-bottom'. */
  objectPosition?: string
}
