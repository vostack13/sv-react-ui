import { FC } from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}
interface Props extends ButtonProps {}

const Button: FC<Props> = ({ children, ...props }) => <button {...props}>{children}</button>

export default Button;