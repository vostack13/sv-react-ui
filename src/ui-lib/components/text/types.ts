import { Colors } from "../../types";

type TextVariant = 'title' | 'body' | 'link';

interface SpanProps extends React.HTMLAttributes<HTMLOrSVGElement>, React.AriaAttributes  {}

export interface TextProps extends SpanProps {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TextVariant;
  hover?: boolean;
  invert?: boolean;
  color?: Colors
}