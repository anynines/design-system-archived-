import { AriaAttributes, DOMAttributes } from 'react'

export type ReactHtmlElementProps<T extends AriaAttributes | DOMAttributes<T>>
  = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>

export type DefaultComponentProps = Pick<ReactHtmlElementProps<HTMLDivElement>, 'className' | 'style'>
