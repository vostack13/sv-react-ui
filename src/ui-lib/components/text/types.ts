type TextVariant = 'title' | 'body' | 'link';

interface SpanProps extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, React.AriaAttributes  {}

export interface TextProps extends SpanProps {
  variant?: TextVariant;
  hover?: boolean;
}