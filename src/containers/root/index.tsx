import { FC } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Button, Checkbox, Text } from "../../ui-lib";
import { useTheme } from "../../ui-lib";
import { Box } from "../../ui-lib/components/box";
import { GridEdit } from "../../ui-lib/icons/grid-edit";

export const Root: FC = () => {
  const { isDark, toggle } = useTheme();

  return <div>
    <aside>
      <Box pv="16">
        <Checkbox label={'Темная тема'} checked={isDark} onChange={toggle} />
      </Box>

      <Box style={{maxWidth: 560, margin: '0 auto'}}>
        <Box pv="12">
          <Box pb="12">
            <Text tag='h2' variant='title'>Buttons</Text>
          </Box>

          <Box row gap="16">
            <Button variant="primary">Primary</Button>
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary-fill">Secondary Fill</Button>
          </Box>
        </Box>


        <Box gap="16" pv="12">
          <Text tag='h2' variant='title'>Icons</Text>
          <Text variant='body'>This is default icons pack</Text>
        </Box>

        <Box row gap='12' pv="12">
          <ArrowUp />
          <ArrowDown />
          <ArrowLeft />
          <ArrowRight />
          <GridEdit />
        </Box>

        <Box row gap='12' pv='12'>
          <ArrowUp size={16} />
          <ArrowDown size={16} />
          <ArrowLeft size={16} />
          <ArrowRight size={16} />
          <GridEdit size={16} />
        </Box>

        <Box gap="16" pt="32" pb="12">
          <Text tag='h2' variant='title'>Typography</Text>
          <Text variant='body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi veritatis minus, quae labore saepe ipsam illo esse eveniet ut? Ex alias voluptatum aliquid molestias sed dolorem cumque, aut rem.</Text>
        </Box>

        <Box gap="12" pv="12">
          <Text variant='title' hover>Title</Text>
          <Text variant='body' hover>This is body text</Text>
          <Text variant='link' hover>Link style</Text>
        </Box>

        <Box gap="16" pt="32" pb="12">
          <Text tag='h2' variant='title'>Colors</Text>
        </Box>

        <Box grid gridCol='4' gridGap={8} pv="12">
          <Box>
            <Box pv="12" ph="12" bgColor="gray-1" borderColor="gray-6" radius={6}>
              <Text>Gray 1</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-2" borderColor="gray-6" radius={6}>
              <Text>Gray 2</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-3" borderColor="gray-6" radius={6}>
              <Text>Gray 3</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-4" borderColor="gray-6" radius={6}>
              <Text>Gray 4</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-5" borderColor="gray-6" radius={6}>
              <Text>Gray 5</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-6" borderColor="gray-6" radius={6}>
              <Text>Gray 6</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-7" borderColor="gray-6" radius={6}>
              <Text>Gray 7</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-8" borderColor="gray-6" radius={6}>
              <Text invert>Gray 8</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-9" borderColor="gray-6" radius={6}>
              <Text invert>Gray 9</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-10" borderColor="gray-6" radius={6}>
              <Text invert>Gray 10</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="gray-11" borderColor="gray-6" radius={6}>
              <Text invert>Gray 11</Text>
            </Box>
          </Box>
        </Box>

        <Box grid gridCol='4' gridGap={8} pv="12">
          <Box>
            <Box pv="12" ph="12" bgColor="white" borderColor="gray-6" radius={6}>
              <Text color="black">White</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="black" borderColor="gray-6" radius={6}>
              <Text color="white">Black</Text>
            </Box>
          </Box>
        </Box>

        <Box grid gridCol='4' gridGap={8} pv="12">
          <Box>
            <Box pv="12" ph="12" bgColor="pink" borderColor="pink" radius={6}>
              <Text color="white">Pink</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="red" borderColor="red" radius={6}>
              <Text color="white">Red</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="orange" borderColor="orange" radius={6}>
              <Text color="white">Orange</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="yellow" borderColor="yellow" radius={6}>
              <Text color="white">Yellow</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="green" borderColor="green" radius={6}>
              <Text color="white">Green</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="mint" borderColor="mint" radius={6}>
              <Text color="white">Mint</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="teal" borderColor="teal" radius={6}>
              <Text color="white">Teal</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="cyan" borderColor="cyan" radius={6}>
              <Text color="white">Cyan</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="blue" borderColor="blue" radius={6}>
              <Text color="white">Blue</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="indigo" borderColor="indigo" radius={6}>
              <Text color="white">Indigo</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="purple" borderColor="purple" radius={6}>
              <Text color="white">Purple</Text>
            </Box>
          </Box>

          <Box>
            <Box pv="12" ph="12" bgColor="brown" borderColor="brown" radius={6}>
              <Text color="white">Brown</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </aside>
  </div>
}