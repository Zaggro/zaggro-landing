import Button, { ButtonProps } from './Button'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Primary',
    onClick: (e: any) => console.log('Button clicked', e),
  },
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  disabled: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
  disabled: true,
  variant: 'secondary',
  children: 'Secondary',
}

export const Link = Template.bind({})
Link.args = {
  children: 'Link',
  href: '#',
}
export const ExternalLink = Template.bind({})
ExternalLink.args = {
  children: 'External link',
  href: 'https://twitter.com/',
}
