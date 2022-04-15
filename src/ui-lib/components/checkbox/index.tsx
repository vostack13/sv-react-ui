import React, { FC } from "react";
import { Text } from "../text";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.AriaAttributes  {}

interface Props extends InputProps {
  label?: string;
}

const Checkbox: FC<Props> = ({ label, ...props }) => (
  <div className={'SV-Checkbox'}>
    <label>
      <input type={'checkbox'} {...props} />
      {label && <Text className={'SV-Checkbox-label'}>{label}</Text>}
    </label>
  </div>
)


export { Checkbox };