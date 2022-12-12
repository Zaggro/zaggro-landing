import Article, { ArticleProps } from './Article'
import { Meta, Story } from '@storybook/react/types-6-0'
import mockContent from './mock.json'

export default {
  title: 'Pages/Article',
  component: Article,
  args: {
    author: 'John Doe',
    date: '2022-05-04',
    title: 'Article title',
    category: 'category',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/acta-finance-prod.appspot.com/o/blog%2Fphoto_2022-04-19_19-44-05.jpg-MeG0iIvTMIaYuFMeL8vm?alt=media&token=5a918892-2bcd-481b-bde8-cf4fa76e5767',
    content: JSON.stringify(mockContent),
  },
} as Meta

export const Default: Story<ArticleProps> = (args) => <Article {...args} />
