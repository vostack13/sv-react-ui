import { Colors, Space } from "../../types";

type GridGapCol =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'

interface DivProps extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, React.AriaAttributes  {}

export interface BoxProps extends DivProps {
  gap?: Space;
  column?: boolean;
  row?: boolean;
  grid?: boolean;
  gridGap?: number;
  gridCol?: GridGapCol;
  bgColor?: Colors;
  borderColor?: Colors;
  radius?: number;
  pt?: Space;
  pb?: Space;
  pl?: Space;
  pr?: Space;
  pv?: Space;
  ph?: Space;
}