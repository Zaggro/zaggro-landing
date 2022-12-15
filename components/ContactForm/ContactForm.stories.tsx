import ContactForm, { ContactFormProps } from './ContactForm'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  args: {
    isOpen: true,
    onClose: () => console.log('onClose'),
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta<ContactFormProps>

const Template: Story<ContactFormProps> = (args) => <ContactForm {...args} />

export const Default = Template.bind({})
