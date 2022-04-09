import { CSSProperties, FC } from "react"
import cn from '../../utils/classnames';
import { TextProps } from "./types"
import './styles.css'
import './variants/title.css'
import './variants/body.css'
import './variants/link.css'

const Text: FC<TextProps> = ({
  variant = 'body',
  hover = false,
  children,
  className,
  invert,
  color,
  ...props
}) => {
  const style = {
    ...(color ? {'--manual-color' : color} : {})
  } as CSSProperties

  return (
    <span
      style={style}
      className={cn(
        `SV-Text--${variant}`,
        `SV-Text-color${invert ? '-invert' : ''}--${variant}`,
        hover && `SV-Text-hover-color--${variant}`,
        'SV-Text',
        className
      )} {...props}>
        {children}
    </span>
  )
}

export { Text }