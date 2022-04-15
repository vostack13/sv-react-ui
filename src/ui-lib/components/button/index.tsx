import React, { FC } from "react";
import cn from '../../utils/classnames';
import { Props } from "./types";

const Button: FC<Props> = ({ children, variant = 'secondary', ...props }) => (
  <button
    className={
      cn(
        'SV-Button',
        `SV-Button-variant-${variant}`
      )}
    {...props}
  >{children}</button>
)

export { Button };