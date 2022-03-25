import { FC } from "react"
import cn from 'classnames'
import { TextProps } from "./types"
import './styles.css'
import './variants/title.css'
import './variants/body.css'
import './variants/link.css'

const Text: FC<TextProps> = ({ variant = 'body', hover = false, children, className, ...props }) => {

  return <span className={cn(
    `SV-Text--${variant}`,
    hover && `SV-Text-hover--${variant}`,
    'SV-Text',
    className
  )} {...props}>
    {children}
  </span>
}

export { Text }