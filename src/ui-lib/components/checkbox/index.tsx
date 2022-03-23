import { FC } from "react";
import './styles.css'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.AriaAttributes  {}
interface Props extends InputProps {
  label?: string;
}

const Checkbox: FC<Props> = ({ label, ...props }) => (
  <div className={'SV-Checkbox'}>
    <label>
      <input type={'checkbox'} {...props} />
      {label && <span className={'SV-Checkbox-label'}>{label}</span>}
    </label>
  </div>
)


export default Checkbox;