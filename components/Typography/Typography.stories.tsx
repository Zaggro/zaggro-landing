import Typography, { TypographyProps } from './Typography'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Style me via storybook props',
  },
} as Meta<TypographyProps>

const Template: Story<TypographyProps> = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Typography {...args} />
      </div>
      <Typography tag="h1" variant="display-sm">
        display-sm
      </Typography>
      <Typography tag="h2" variant="display-md">
        display-md
      </Typography>
      <Typography tag="h1" variant="h1">
        h1
      </Typography>
      <Typography tag="h2" variant="h2">
        h2
      </Typography>
      <Typography tag="h3" variant="h3">
        h3
      </Typography>
      <Typography tag="h4" variant="h4">
        h4
      </Typography>
      <Typography tag="h5" variant="h5">
        h5
      </Typography>
      <Typography tag="h6" variant="h6">
        h6
      </Typography>
      <Typography variant="link-sm">link-sm</Typography>
      <Typography variant="link-md">link-md</Typography>
      <Typography variant="link-lg">link-lg</Typography>
      <Typography variant="button">button</Typography>
      <Typography variant="menu-sm">menu-sm</Typography>
      <Typography variant="menu-md">menu-md</Typography>
      <Typography variant="blockquote-sm">blockquote-sm</Typography>
      <Typography variant="blockquote-md">blockquote-md</Typography>
      <Typography tag="p" variant="p-sm">
        p-sm
      </Typography>
      <Typography tag="p" variant="p-md">
        p-md
      </Typography>
      <Typography tag="p" variant="p-lg">
        p-lg
      </Typography>
      <Typography tag="p" variant="p-xl">
        p-xl
      </Typography>
    </div>
  )
}

export const Default = Template.bind({})
