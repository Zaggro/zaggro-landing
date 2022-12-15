import ArticlePreview, { ArticlePreviewProps } from './ArticlePreview'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/ArticlePreview',
  component: ArticlePreview,
  args: {
    slug: 'a-very-long-title-a-very-long-title-a-very-long-title-a-very-long-title-a-very-long-title-a-very-long-title-a-very-long-title',
    title:
      'A very long title, A very long title, A very long title, A very long title, A very long title, A very long title, A very long title,',
    content:
      '{"time":1670925590112,"blocks":[{"id":"3b9oyuCPok","type":"header","data":{"text":"h1&nbsp;","level":1}},{"id":"qSjnYoNbk-","type":"header","data":{"text":"h2","level":2}},{"id":"xMZjg0vCYE","type":"header","data":{"text":"h3","level":3}},{"id":"PzyVpqocwk","type":"header","data":{"text":"h4","level":4}},{"id":"_Wp4ovnVta","type":"header","data":{"text":"h5","level":5}},{"id":"VcNK7GFncY","type":"header","data":{"text":"h6","level":6}},{"id":"E1sCO-YKYB","type":"paragraph","data":{"text":"Lorem ipsum bklabal,&nbsp;Lorem ipsum bklabal,Lorem ipsum bklabal,Lorem ipsum bklabal,Lorem ipsum bklabal,Lorem ipsum bklabal,Lorem ipsum bklabal,Lorem ipsum bklabal,Lorem ipsum bklabal,&nbsp;<a href=\\"http://www.google.com\\">Lorem</a> ipsum <b>bklabal</b>, Lorem <i>ipsum</i> bklabal,Lorem ipsum bklabal"}},{"id":"eR5N7JLBuE","type":"list","data":{"style":"ordered","items":["li1","li2","l3"]}},{"id":"lPqONLDZt9","type":"list","data":{"style":"unordered","items":["li1","li2","li3"]}},{"id":"xM6jeeOI8J","type":"table","data":{"withHeadings":false,"content":[["Table","adsad","ads"],["adsad","asd","asd"]]}},{"id":"6sg5L290Da","type":"image","data":{"file":{"url":"https://firebasestorage.googleapis.com/v0/b/zaggro.appspot.com/o/blog%2Ftest.png-fY56T3EZ6oavMCCIVFFb?alt=media&token=55c537ae-b178-44b0-886e-ec0d53eb6684"},"caption":"Caption for image","withBorder":false,"stretched":false,"withBackground":false}}],"version":"2.26.2"}',
    date: '2022-12-12',
    imageUrl: 'https://via.placeholder.com/1116x645',
    category: 'Category',
    description:
      'A very long description, A very long description, A very long description, A very long description, A very long description, A very long description, A very long description, A very long description, A very long description, A very long description, A very long description, A very long description,',
    readLength: '2',
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
