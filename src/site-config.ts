export const siteConfig = {
  author: 'Yashraj Patil',
  title: 'My Portfolio Website',
  // subtitle: '',
  description: 'Everything Astro',
  image: {
    src: '/Website/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'yashrajp1007@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/Yashraj6190',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    // {
    //   text: 'Twitter',
    //   href: '',
    //   icon: 'i-simple-icons-x',
    //   header: 'i-ri-twitter-x-line',
    // },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/yashraj-patil-0849331a4',
      icon: 'i-simple-icons-linkedin',
    },
    // {
    //   text: 'Blog',
    //   href: '',
    //   icon: 'i-simple-icons-w',
    // },
    // {
    //   text: 'Youtube',
    //   href: '',
    //   icon: 'i-simple-icons-youtube',
    // },
  ],
  header: {
    logo: {
      src: '/Website/favicon.svg',
      alt: 'Logo Image',
      href: '/Website/',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/Website/blog',
      },
      {
        text: 'Notes',
        href: '/Website/blog/notes',
      },
      // {
      //   text: 'Talks',
      //   href: '/Website/blog/talks',
      // },
      {
        text: 'Projects',
        href: '/Website/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '',
      },
      {
        text: 'Notes',
        href: '/notes',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/Website/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/Website/md-style',
      },
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      },
    ],
  },
}

export default siteConfig
