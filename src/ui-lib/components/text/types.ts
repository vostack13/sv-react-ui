import { Colors } from "../../types";

export type TextVariant = 'title' | 'body' | 'link';

interface SpanProps extends React.HTMLAttributes<HTMLOrSVGElement>, React.AriaAttributes  {}

export interface TextProps extends SpanProps {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TextVariant | string;
  hover?: boolean;
  invert?: boolean;
  color?: Colors
}