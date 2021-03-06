import { FC } from "react"
import cn from '../../utils/classnames';
import { IconProps } from "./types"

const IconBase: FC<IconProps> = ({ children, color, size = 24, ...props }) => {
  return <div className={cn(
    "SV-Icon",
    `SV-Icon-size-${size}`,
    color && `SV-Icon-color-${color}`,
  )} {...props}>
    {children}
  </div>
}

export { IconBase }