export interface SectionData {
  title?: string
}

export interface Slide {
  title: string
  subtitle: string
  src: string
  link?: string
}

export type Slider<T = SectionData> = T & {
  slides: Slide[]
}
