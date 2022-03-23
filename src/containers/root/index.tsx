import { FC } from "react";
import { Checkbox } from "../../ui-lib";
import { useTheme } from "../../ui-lib";

export const Root: FC = () => {
  const { isDark, toggle } = useTheme();

  return <div>
    <aside>
      <Checkbox label={'Светлая тема'} checked={isDark} onChange={toggle} />
    </aside>
  </div>
}