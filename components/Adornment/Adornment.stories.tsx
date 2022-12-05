import Adornment, { AdornmentProps } from './Adornment'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Adornment',
  component: Adornment,
  args: {
    children: 'Adornment',
  },
} as Meta<AdornmentProps>

const Template: Story<AdornmentProps> = (args) => <Adornment {...args} />

export const Default = Template.bind({})
