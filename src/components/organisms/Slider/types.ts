export interface SectionData {
  title?: string
}

export interface Slide {
  title: string
  subtitle: string
  src: string
  link?: string
  children?: React.ReactNode
}

export type Slider<T = SectionData> = T & {
  slides: Slide[]
}
