// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ghayeth-bhr', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/MyPortfolio1',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['ghayeth-bhr/defi-nuit-d-info','ghayeth-bhr/project-module-frontend'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Habit tracker web site with React and Firebase',
          description:
            'A web site to track your habits and goals, built with React and Firebase',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/D4D22AQHE6z0t6n9hSA/feedshare-shrink_2048_1536/B4DZczADnWHMAo-/0/1748907373314?e=1757548800&v=beta&t=4ZaS9QWbvTihceuSiGAvDaOu4EBVJxLnN9f00-lhmSM',
          link: 'https://www.linkedin.com/posts/ben-haj-rhouma-ghayeth-0ba58b332_webdevelopment-reactjs-firebase-activity-7335449201088024576-FAPt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFO8Ls4Be8-d4C_ODOHelc7rKMCTQ7ARA7s',
        },
        {
          title: 'Drowsiness detection android App',
          description:
            'A mobile application using the front camera to detect signs of drowsiness such as eye closure and yawning via MediaPipe and EAR/MAR algorithms, issuing real-time alerts.',
          imageUrl:
            'https://raw.githubusercontent.com/ghayeth-bhr/DrowsinessDetection-Android-App-version-/refs/heads/main/app/src/main/res/mipmap-hdpi/ic_launcher.jpeg',
          link: 'https://github.com/ghayeth-bhr/DrowsinessDetection-Android-App-version-',
        },
        {
          title: 'Football Video Analysis',
          description:'A comprehensive football video analysis application with GPU-optimized object tracking, player performance analysis, and team statistics.',
          imageUrl:'https://raw.githubusercontent.com/ghayeth-bhr/Football-Video-Analysis-/refs/heads/main/asset/Screenshot%202025-07-30%20192719.png',
          link:'https://www.linkedin.com/posts/ben-haj-rhouma-ghayeth-0ba58b332_deeplearning-computervision-ai-activity-7356409792732479488-MkAu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFO8Ls4Be8-d4C_ODOHelc7rKMCTQ7ARA7s'

    
        }
      ],
    },
  },
  seo: { title: 'Portfolio of Ghayeth Bhr', description: '', imageURL: '' },
  social: {
    linkedin: 'ben-haj-rhouma-ghayeth-0ba58b332',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ghayeth.benhajrhouma@eniso.u-sousse.tn',
  },
  resume: {
    fileUrl:
      'src/assets/CV_BEN_HAJ_RHOUMA_GHAYETH.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'JavaScript',
    'React.js',
    'C++',
    'C',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'HTML',
    'Flask',
    'TensorFlow',
    'PyTorch',
    'Keras',
    'OpenCV',
    'ultralytics',
    'MediaPipe',
  ],
  experiences: [
    {
      company: 'Teknovat',
      position: 'internship',
      from: '1 June 2025',
      to: '30 july 2025',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Supervised Machine Learning: Regression and Classification',
      body: 'Coursera / DeepLearning.AI / Stanford University',
      year: '2024',
      link: 'https://coursera.org/verify/AW1LEMDCFX6L',
    },
    {
      name: 'Advanced Learning Algorithms',
      body: 'Coursera / DeepLearning.AI / Stanford University',
      year: '2024',
      link: 'https://coursera.org/verify/1WRQZ52BDKDX',
    },
    {
      name: 'Fundamentals of Deep Learning',
      body: 'NVIDIA Deep Learning Institute',
      year: '2024',
      link: 'https://courses.nvidia.com/certificates/1tO0Ys3ITkGJkXM3sgBKrQ',
    },
    {
      name: 'Intermediate Deep Learning with PyTorch',
      body: 'DataCamp',
      year: '2024',
      link: 'https://datacamp.com/certificate/39865123',
    },
    {
      name: 'Introduction to Deep Learning with PyTorch',
      body: 'DataCamp',
      year: '2024',
      link: 'https://datacamp.com/certificate/39822456',
    },
    {
      name: 'Data Manipulation with Pandas',
      body: 'DataCamp',
      year: '2024',
      link: 'https://datacamp.com/certificate/39205170',
    },
    {
      name: 'Image Processing in Python',
      body: 'DataCamp',
      year: '2024',
      link: 'https://datacamp.com/certificate/39906785',
    },
  ],
  educations: [
    {
      institution: 'ENISO – École Nationale d\'Ingénieurs de Sousse',
      degree: 'Cycle ingénieur en informatique appliquée – 1ʳᵉ année',
      from: '2024',
      to: 'Present',
    },
    {
      institution: 'IPEIM (Institut Préparatoire aux Études d\'Ingénieurs de Monastir)',
      degree: 'Cycle préparatoire aux études d\'ingénieur',
      from: '2022',
      to: '2024',
    },
   ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    
  },
  googleAnalytics: {
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark'
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  
};

export default CONFIG;
