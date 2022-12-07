import CardBase, { CardBaseProps } from './CardBase'
import { Meta, Story } from '@storybook/react/types-6-0'
import Icon from 'public/svgs/protocol/api.svg'

export default {
  title: 'Components/CardBase',
  component: CardBase,
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
        venenatis eros. Vestibulum ac ex turpis. Etiam blandit mi et massa
        imperdiet, eu elementum metus egestas. Morbi ultrices neque eget odio
        bibendum, eget eleifend metus molestie. Nullam tempor dui a lorem
        facilisis, quis vulputate mi porta. Morbi ornare consequat velit, eget
        scelerisque justo maximus eget. Quisque maximus nec odio in elementum.
        Donec ultrices posuere facilisis. Etiam tincidunt suscipit eros in
        venenatis. Mauris sit amet tincidunt eros, sed molestie risus. Mauris
        justo urna, varius sit amet nunc ac, gravida euismod neque. In tempor
        nisl ut felis fringilla, nec cursus lacus pretium. Donec varius massa
        vitae magna hendrerit semper. Cras tristique tristique iaculis. Aenean
        eget suscipit enim, ac facilisis elit. Sed nec lorem augue. Proin lectus
        neque, pretium non molestie at, ornare ut mauris. Aenean molestie nulla
        a vestibulum molestie. Morbi quis purus odio. Etiam tincidunt urna sit
        amet erat eleifend, ac aliquam orci commodo. Praesent et est a metus
        pharetra vestibulum. Pellentesque non felis mollis, ullamcorper odio
        scelerisque, tincidunt elit. Integer vel ex efficitur, semper dui eget,
        condimentum massa. Praesent faucibus, lacus sed ornare condimentum, sem
        velit molestie quam, sed faucibus nibh sem ac justo. Integer porta vel
        augue non feugiat. Duis vulputate, nisi vitae sollicitudin viverra,
        dolor diam venenatis neque, fermentum maximus risus tortor in sapien.
        Fusce leo erat, tincidunt id venenatis nec, rhoncus quis libero. Mauris
        tempus sapien lectus, sit amet iaculis dolor vehicula at. Mauris dictum
        venenatis molestie. Fusce sodales at nunc ut feugiat. In quis suscipit
        turpis, non vulputate erat. Aenean imperdiet dignissim tincidunt. Nulla
        feugiat vulputate sodales. Duis at turpis rutrum urna ultrices egestas
        eu sed felis. Nam convallis pellentesque lacus, vel facilisis leo
        ultrices in. Vestibulum eget scelerisque orci, et sagittis lacus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sem at
        augue ultrices lobortis. Vivamus auctor, leo a scelerisque mollis,
        tellus nisl viverra enim, ac fermentum eros dolor ut mauris. Nulla
      </>
    ),
  },
} as Meta<CardBaseProps>

const Template: Story<CardBaseProps> = (args) => <CardBase {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

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
