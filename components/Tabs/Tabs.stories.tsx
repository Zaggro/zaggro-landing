import { Meta, Story } from '@storybook/react/types-6-0'

import Tabs, { TabProps } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    onChange: (name: string, index: number) => {
      console.log(name, index)
    },
  },
} as Meta<TabProps>

const Template: Story<TabProps> = (args) => <Tabs {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variation: 'primary',
  items: ['Partners', 'Backers', 'Influencers'],
}

export const Secondary = Template.bind({})
Secondary.args = {
  variation: 'secondary',
  items: ['All', 'Partnerships', 'Development Update', 'ActaFi Ecosystem'],
}
