type IconColor = 
  | 'gray'
  | 'gray-2'
  | 'gray-3'
  | 'gray-4'
  | 'gray-5'
  | 'gray-6'
  | 'body'
  | 'link'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'brown';

interface DivProps extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, React.AriaAttributes  {}

export interface IconProps extends DivProps {
  color?: IconColor;
  hover?: boolean;
}