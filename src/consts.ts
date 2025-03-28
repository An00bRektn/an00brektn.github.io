export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'root@nayyyr:~/blog#',
  DESCRIPTION:
    'Not another infosec/computer science blog.',
  EMAIL: 'An00bRektn@proton.me',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://an00brektn.github.io',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/An00bRektn', label: 'GitHub' },
  { href: 'https://twitter.com/An00bRektn', label: 'Twitter' },
  { href: 'An00bRektn@proton.me', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]