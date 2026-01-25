import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'andreforsyth',
  description: 'Personal website of Andre Forsyth.',
  href: 'https://andreforsyth.com',
  author: 'Andre Forsyth',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/andreforsyth/',
    label: 'LinkedIn',
  },
  {
    href: 'https://substack.com/@andreforsyth',
    label: 'Substack',
  },
  {
    href: 'https://www.instagram.com/andreforsyth_/',
    label: 'Instagram',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Substack: 'lucide:aperture',
  Instagram: 'lucide:instagram',
}
