import { FC } from "react";
import cn from "classnames";
import './styles.css'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}
interface Props extends ButtonProps {}

const Button: FC<Props> = ({ children, ...props }) => <button className={cn('SV-Button')} {...props}>{children}</button>

export default Button;