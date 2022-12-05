import Navbar, { NavbarProps } from './Navbar'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  args: {
    children: 'Navbar',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<NavbarProps>

const Template: Story<NavbarProps> = (args) => (
  <div>
    <Navbar {...args} />
    <div style={{ background: 'blue', width: '100%', height: '200px' }}></div>
    <div style={{ height: '1400px' }}></div>
  </div>
)

export const Default = Template.bind({})
