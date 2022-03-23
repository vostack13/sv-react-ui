import { FC } from "react";
import Checkbox from "../../ui-lib/components/checkbox";
import { useTheme } from "../../ui-lib/hooks/use-theme";

export const Root: FC = () => {
  const { isDark, toggle } = useTheme();

  return <div>
    <aside>
      <Checkbox label={'Светлая тема'} checked={isDark} onChange={toggle} />
    </aside>
  </div>
}