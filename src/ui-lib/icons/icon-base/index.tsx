import { FC } from "react"
import './styles.css'
import cn from 'classnames'
import { IconProps } from "./types"

const IconBase: FC<IconProps> = ({ children, color, hover, ...props }) => {
  return <div className={cn(
    "SV-Icon",
    color && `SV-Icon-color-${color}`,
    // color && hover && `SV-Icon-color-hover-${color}`
  )} {...props}>
    {children}
  </div>
}

export { IconBase }