import Article, { ArticleProps } from './Article'
import mockContent from './mock.json'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Pages/Article',
  component: Article,
  args: {
    date: '2022-05-04',
    title: 'Article title',
    category: 'category',
    imageURL: 'https://via.placeholder.com/1116x645',
    readLength: 5,
    description: 'Article description',
    content: JSON.stringify(mockContent),
  },
} as Meta

export const Default: Story<ArticleProps> = (args) => <Article {...args} />
