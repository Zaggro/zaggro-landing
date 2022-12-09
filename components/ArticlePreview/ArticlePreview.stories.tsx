import ArticlePreview, { ArticlePreviewProps } from './ArticlePreview'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/ArticlePreview',
  component: ArticlePreview,
  args: {
    imageUrl: 'https://via.placeholder.com/600x400',
    articleUrl: '/blog/some-article',
    title:
      'Multiple line title, Multiple line title, Multiple line title, Multiple line title, Multiple line title ',
    category: 'news',
    dateCreated: '03 january 2020',
    readLength: '5 min read',
  },
} as Meta<ArticlePreviewProps>

const Template: Story<ArticlePreviewProps> = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
    <ArticlePreview {...args} />
    <ArticlePreview
      {...args}
      imageUrl="https://via.placeholder.com/150x200"
      title="One line title"
    />
  </div>
)

export const Default = Template.bind({})
