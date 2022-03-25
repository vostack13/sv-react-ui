import { FC } from "react";
import { ArrowLeft, Checkbox, Text } from "../../ui-lib";
import { useTheme } from "../../ui-lib";

export const Root: FC = () => {
  const { isDark, toggle } = useTheme();

  return <div>
    <aside>
      <Checkbox label={'Светлая тема'} checked={isDark} onChange={toggle} />

      <div style={{maxWidth: 320, margin: '0 auto'}}>
        <h1>
          <Text variant='title'>Lorem ipsum dolor sit amet consectetur</Text>
        </h1>

        <p>
          <Text variant='body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi veritatis minus, quae labore saepe ipsam illo esse eveniet ut? Ex alias voluptatum aliquid molestias sed dolorem cumque, aut rem.</Text>
        </p>

        <Text variant='link' hover>Read more...</Text>

        <h1>
          <Text variant='title' hover>Lorem ipsum dolor sit amet consectetur</Text>
        </h1>

        <p>
          <Text variant='body' hover>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi veritatis minus, quae labore saepe ipsam illo esse eveniet ut? Ex alias voluptatum aliquid molestias sed dolorem cumque, aut rem.</Text>
        </p>

        <Text variant='link' hover>Read more...</Text>

      <div>
        <ArrowLeft />
      </div>
      </div>

    </aside>
  </div>
}