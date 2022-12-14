import Discord from 'public/svgs/social/discord.svg'
import Facebook from 'public/svgs/social/facebook.svg'
import Github from 'public/svgs/social/github.svg'
import LinkedIn2 from 'public/svgs/social/linkedIn2.svg'
import LinkedIn from 'public/svgs/social/linkedin.svg'
import Mail from 'public/svgs/social/mail.svg'
import Telegram from 'public/svgs/social/telegram.svg'
import Twitter2 from 'public/svgs/social/twitter2.svg'
import Twitter from 'public/svgs/social/twitter.svg'
import WhatsApp from 'public/svgs/social/whatsapp.svg'

export const socialLinks = [
  {
    url: 'https://twitter.com/ZaggroSwap',
    name: 'Twitter',
    icon: <Twitter />,
  },
  // {
  //   url: '',
  //   name: 'Discord',
  //   icon: <Discord />,
  // },
  {
    url: 'https://t.me/ZAGGRO_News',
    name: 'Telegram',
    icon: <Telegram />,
  },
  {
    url: 'https://github.com/orgs/Zaggro/repositories',
    name: 'Github',
    icon: <Github />,
  },
  // {
  //   url: '',
  //   name: 'LinkedIn',
  //   icon: <LinkedIn />,
  // },
]

export const shareButtons = [
  {
    icon: <Twitter2 />,
    href: 'https://twitter.com/intent/tweet?url=',
  },
  {
    icon: <Facebook />,
    href: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  {
    icon: <LinkedIn2 />,
    href: 'https://www.linkedin.com/shareArticle?mini=true&url=',
  },
  {
    icon: <WhatsApp />,
    href: 'https://wa.me/?text=',
  },
  {
    icon: <Mail />,
    href: 'mailto:?subject=&body=',
  },
]

export const headerLinks = [
  {
    text: 'The protocol',
    href: '/#protocol',
  },
  {
    text: 'Integrations',
    href: '/#integrations',
  },
  {
    text: 'Partners',
    href: '/#partners',
  },
  {
    text: 'Audits',
    href: '/#audits',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Contact',
    href: '/#contact',
  },
]

export const footerLinks = [
  [
    {
      text: 'ZAGGRO Protocol',
      url: '/#protocol',
    },
    {
      text: 'Integrations',
      url: '/#integrations',
    },
    {
      text: 'Partners',
      url: '/#partners',
    },
    {
      text: 'Blog',
      url: '/blog',
    },
    {
      text: 'Media kit',
      url: 'https://drive.google.com/drive/folders/1LuvYT46BNh47QeULQT-9w4tAwIg2u4qd?usp=share_link',
    },
    {
      text: 'Contact',
      url: '/#contact',
    },
  ],
  [
    {
      text: 'DAO Forum',
      url: '',
    },
    {
      text: 'DAO Vote',
      url: '',
    },
    {
      text: 'Trade',
      url: '',
    },
    {
      text: 'Stake',
      url: '',
    },
    {
      text: 'Liquidity Components',
      url: '',
    },
    {
      text: 'Trade ZGRO',
      url: '',
    },
  ],
  [
    {
      text: 'Dashboard',
      url: '',
    },
    {
      text: 'Careers',
      url: '',
    },
    {
      text: 'Docs',
      url: '',
    },
    {
      text: 'Privacy Policy',
      url: '',
    },
  ],
]
