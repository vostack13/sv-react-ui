import { CSSProperties, FC } from "react"
import cn from '../../utils/classnames';
import { TextProps } from "./types"

const Text: FC<TextProps> = ({
  tag: Tag = 'span',
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
    <Tag
      style={style}
      className={cn(
        `SV-Text--${variant}`,
        `SV-Text-color${invert ? '-invert' : ''}--${variant}`,
        hover && `SV-Text-hover-color--${variant}`,
        'SV-Text',
        className
      )} {...props}>
        {children}
    </Tag>
  )
}

export { Text }