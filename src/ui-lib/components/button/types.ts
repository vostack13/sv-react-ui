type Variant = 'primary' | 'secondary' | 'secondary-fill';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

export interface Props extends ButtonProps {
  variant?: Variant;
}