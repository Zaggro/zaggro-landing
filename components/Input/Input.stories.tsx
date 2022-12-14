import Input, { InputProps } from './Input'
import { Meta, Story } from '@storybook/react/types-6-0'
import { useState } from 'react'

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
} as Meta<InputProps>

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState('')
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export const Default = Template.bind({})

export const Required = Template.bind({})
Required.args = {
  required: true,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
}
