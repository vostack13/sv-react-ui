import { Colors } from "../../types";

interface DivProps extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, React.AriaAttributes  {}

export interface IconProps extends DivProps {
  color?: Colors;
  size?: number;
}