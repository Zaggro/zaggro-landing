import CardBase, { CardBaseProps } from './CardBase'
import { Meta, Story } from '@storybook/react/types-6-0'
import Icon from 'public/svgs/protocol/api.svg'

export default {
  title: 'Components/CardBase',
  component: CardBase,
  args: {
    children: 'CardBase',
  },
} as Meta<CardBaseProps>

const Template: Story<CardBaseProps> = (args) => <CardBase {...args} />

export const Default = Template.bind({})

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: <Icon />,
}

export const WithComingSoon = Template.bind({})
WithComingSoon.args = {
  comingSoon: true,
}

export const AsLink = Template.bind({})
AsLink.args = {
  href: 'https://google.com',
  target: '_blank',
}
