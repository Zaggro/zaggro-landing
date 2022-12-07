import Contact, { ContactProps } from './Contact'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Contact',
  component: Contact,
} as Meta<ContactProps>

const Template: Story<ContactProps> = (args) => <Contact {...args} />

export const Default = Template.bind({})
