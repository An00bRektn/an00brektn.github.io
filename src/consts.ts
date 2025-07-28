import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'root@nayyyr:~/blog#',
  description:
    'Not another infosec/computer science blog.',
  author: 'an00b',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
  href: 'https://an00brektn.github.io',
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/An00bRektn', label: 'GitHub' },
  { href: 'https://twitter.com/An00bRektn', label: 'Twitter' },
  { href: 'An00bRektn@proton.me', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]