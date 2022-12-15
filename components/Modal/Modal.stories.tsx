import Modal, { ModalProps } from './Modal'
import { Meta, Story } from '@storybook/react/types-6-0'
import { useState } from 'react'
import Button from 'components/Button/Button'

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: 'modal content',
  },
} as Meta<ModalProps>

const Template: Story<ModalProps> = ({ isOpen, ...args }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Open modal</Button>
      <Modal
        {...args}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export const Default = Template.bind({})
