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
  phone: '+91 8080097583',
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
    {
      text: 'Blog',
      href: 'https://www.siriusnoir.wordpress.com',
      icon: 'i-fa-brands-wordpress-simple',
    },
    // {
    //   text: 'Youtube',
    //   href: '',
    //   icon: 'i-simple-icons-youtube',
    // },
  ],

  researchInterests: [
    {
      text: 'Machine Learning Applications in Astrophysics',
      icon: 'i-eos-icons-machine-learning-outlined', // Replace with appropriate icon class
    },
    {
      text: 'Numerical Simulations',
      icon: 'i-icon-park-outline-code-computer', // Replace with appropriate icon class
    },
    {
      text: 'Self-interacting Dark Matter',
      icon: 'i-file-icons:electron', // Replace with appropriate icon class
    },
    {
      text: 'Galaxy Formation and Evolution',
      icon: 'i-game-icons-galaxy', // Replace with appropriate icon class
    },
  ],

  header: {
    logo: {
      src: '/Website/favicon.svg',
      alt: 'Logo Image',
      href: '/Website/',
    },
    navLinks: [

      // {
      //   text: 'Notes',
      //   href: '/Website/blog/notes',
      // },
      // {
      //   text: 'Talks',
      //   href: '/Website/blog/talks',
      // },

      { text: 'Interests', href: '/Website/#research-interests' },
      { text: 'Skills', href: '/Website/#skills' },
      // { text: 'Projects', href: '/Website/#projects' },
      { text: 'Contact', href: '/Website/#contact' },
      {
        text: 'Projects',
        href: '/Website/projects',
      },
      {
        text: 'Blog',
        href: '/Website/blog',
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
