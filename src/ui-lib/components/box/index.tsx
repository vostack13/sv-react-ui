import { CSSProperties, FC } from "react"
import cn from '../../utils/classnames';
import { BoxProps } from "./types"

const Box: FC<BoxProps> = ({
  children,
  row = false,
  column = true,
  grid = false,
  gridGap,
  gridCol,
  gap = 0,
  pt,
  pb,
  pl,
  pr,
  pv,
  ph,
  bgColor,
  borderColor,
  radius,
  ...props
}) => {
  const style = {
    ...(bgColor ? {'--bg-color': `var(--${bgColor})`} : {}),
    ...(borderColor ? {
      '--border-width': '1px',
      '--border-color': `var(--${borderColor})`,
    } : {}) ,
    ...(radius ? {'--radius': radius  + 'px'} : {}),
    ...(gap ? {'--gap': `${gap}px`} : {}),

    ...(gridGap ? {
      '--grid-gap': `${gridGap}px`,
      marginLeft: `-${gridGap}px`,
      marginRight: `-${gridGap}px`
    } : {}),
    
    ...(gridCol ? {'--grid-coll': gridCol} : {})
  } as CSSProperties

  return <div
  style={style}
  className={
    cn(
    'SV-Box',
    'SV-Box-flex',
    grid && 'SV-Box-grid',
    row && 'SV-Box-flex-row',
    !row && column && 'SV-Box-flex-column',
    pt && `SV-pt-${pt}`,
    pb && `SV-pb-${pb}`,
    pl && `SV-pl-${pl}`,
    pr && `SV-pr-${pr}`,
    pv && `SV-pv-${pv}`,
    ph && `SV-ph-${ph}`,
  )} {...props}>
    {children}
  </div>
}

export { Box }