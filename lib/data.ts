// Hero: главное превью работ (иллюстрации Belgrade)
export const heroImage = 'portrait.jpg';

export const site = {
  name: 'Ekaterina Zueva',
  tagline:
    'Illustrator, Graphic Designer, and 2D Animator with over 10 years of experience.',
  resumeUrl:
    'https://drive.google.com/file/d/1qCuJbGmUzd4aAEDShPzynxy9NtKS0skw/view?usp=sharing',
  email: 'evazu.art@gmail.com',
  telegram: 'https://t.me/Evazu_K',
  telegramLabel: 'Telegram',
  instagram: 'https://www.instagram.com/katya_evazu/',
  instagramLabel: '@katya_evazu',
};

export const aboutIntro = [
  'My professional background is diverse: I have worked with startups, marketing agencies, as a freelancer, on outsourcing projects, and within a company environment. This experience has equipped me with skills in independence, handling abstract tasks, conducting research and in-depth interviews, and building effective communication with clients and colleagues.',
  "I consider myself a multidisciplinary designer because I've tackled a wide range of tasks and am not afraid to dive into unfamiliar areas. Thanks to my experience with startups and freelancing, I can effectively take on the role of a small design studio, managing projects from concept to physical implementation and launch. And I genuinely enjoy these processes.",
];

export const services = [
  {
    id: 'illustration',
    title: 'Illustration',
    items: [
      'Commercial illustration (for brands, advertising, and media, websites)',
      'Specialized illustration (games, podcasts, music covers)',
      'Applied illustration (diagrams and visual guides for instructions)',
      'Artistic and personal projects',
    ],
  },
  {
    id: 'animation',
    title: '2D Animation',
    items: [
      'Music videos',
      'Animation for web resources (app openers, short animations for illustrations and logos)',
      'Independent and festival projects',
    ],
  },
  {
    id: 'branding',
    title: 'Branding',
    items: [
      'Development of a brand book (brand platform, values, mission, etc.)',
      'Design of logos, corporate identity, and additional graphics',
      'Creation of guidelines, including branded assets, layout rules, and all necessary instructions',
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    items: [
      'Print materials: design, layout, and preparation for printing',
      'Packaging design',
      'Digital Design in Figma (website banners, social media graphics, icons, and other web visuals)',
      'Presentation design for various purposes (product presentations, pitch decks, etc.)',
    ],
  },
];

export const illustrationProjects = [
  {
    title: 'A series of illustrations about the brutalist architecture of Belgrade',
    href: 'https://www.notion.so/A-series-of-illustrations-about-the-brutalist-architecture-of-Belgrade-14db2b33972b8177bc76f9c630c1ec58?pvs=21',
    image: 'belgrade.webp',
  },
  {
    title: 'Illustrated Stories in Comic Style',
    href: 'https://www.notion.so/Illustrated-stories-inspired-by-Belgrade-14db2b33972b81839965e7e19016830b?pvs=21',
    image: 'Stories Belgrade.webp',
  },
  {
    title: 'Illustrations & Design for Foxy Roasters — gift sets, postcards, and stickers',
    href: 'https://www.notion.so/Illustrations-for-Foxy-Roasters-a-coffee-roaster-and-a-cozy-coffee-shop-305b2b33972b8079a197c7d929da137e?pvs=21',
    image: 'Foxy Roasters.webp',
  },
  {
    title: 'Yerevan',
    href: 'https://www.notion.so/An-illustration-inspired-by-Yerevan-14db2b33972b817fbc22fb57d7748cab?pvs=21',
    image: 'Yerevan1.jpg',
  },
  {
    title: 'Illustrations for a project dedicated to Chinese Tea',
    href: 'https://www.notion.so/Illustrations-for-a-project-dedicated-to-Chinese-Tea-14db2b33972b81e2a836dcb0c8ac9500?pvs=21',
    image: 'Chinese tea.webp',
  },
  {
    title: 'Belgrade Atmosphere, Illustration Series',
    href: 'https://www.notion.so/Belgrade-Atmosphere-Illustration-Series-by-Ekaterina-Zueva?pvs=21',
    image: 'BA2.jpg',
  },
  {
    title: 'Music Visuals Design',
    href: 'https://www.notion.so/Music-Visuals-Design-by-Ekaterina-Zueva-19930e5485884177b52f4472709efeb2?pvs=21',
    image: 'Musicals.webp',
  },
  {
    title: 'Illustrated Infographics for the nekorobka Project',
    href: 'https://www.notion.so/Illustrated-Infographics-for-the-nekorobka-Project-14db2b33972b81caba4bdb8f9103f409?pvs=21',
    image: 'Infographics.webp',
  },
];

export type AnimationItem =
  | {
      type: 'video';
      vimeoId: string;
      projectHref?: string;
      projectTitle?: string;
      caseStudyId?: string;
      /** Key into translations[locale].animationTitles */
      animationTitleKey?: keyof (typeof import('./translations').translations)['en']['animationTitles'];
      /** Optional cover in public/images (filename); overrides Vimeo thumbnail */
      coverImage?: string;
    }
  | { type: 'driveVideo'; driveUrl: string; title: string; copyright?: string; googleDriveFileId?: string; projectHref?: string; previewImage?: string }
  | { type: 'project'; title: string; href: string }
  | { type: 'copyright'; text: string }
  | { type: 'link'; label: string; href: string };

export const animationItems: AnimationItem[] = [
  {
    type: 'video',
    vimeoId: '845322690',
    caseStudyId: 'hobby-matching-animation',
    animationTitleKey: 'nekorobka',
    coverImage: 'Result mokup.jpg',
    projectHref:
      'https://ekaterinazueva.notion.site/Nekorobka-animation-for-a-web-service-with-a-hobby-matching-test-14db2b33972b8142b3efca6356c3f70c?pvs=25',
  },
  {
    type: 'video',
    vimeoId: '710275696',
    caseStudyId: 'home-personal-project',
    animationTitleKey: 'homePersonalProject',
    coverImage: 'Home.jpg',
  },
  {
    type: 'video',
    vimeoId: '1184035324',
    caseStudyId: 'logo-social-media-animation',
    animationTitleKey: 'logoSocialMediaAnimation',
    coverImage: 'LOGO FB anima 5s.jpg',
  },
  {
    type: 'video',
    vimeoId: '1183729388',
    caseStudyId: 'learn-with-mochi-animation',
    animationTitleKey: 'learnWithMochi',
    coverImage: 'LWM 2.jpg',
  },
  {
    type: 'video',
    vimeoId: '1184036381',
    caseStudyId: 'line-animation-frame-by-frame',
    animationTitleKey: 'lineFrameByFrame',
    coverImage: 'Line prew.jpg',
  },
  {
    type: 'video',
    vimeoId: '469486289',
    caseStudyId: 'mixed-media-animation',
    animationTitleKey: 'mixedMediaAnimation',
    coverImage: 'Mix media prew.jpg',
  },
  {
    type: 'video',
    vimeoId: '505248946',
    caseStudyId: 'animation-over-video',
    animationTitleKey: 'animationOverVideo',
    coverImage: 'Video prew.jpg',
  },
];

export const brandingProjects = [
  {
    title: 'Visual identity for Chinese tea sets',
    href: 'https://www.notion.so/Branding-and-visual-identity-for-Chinese-tea-gift-sets-14db2b33972b81e09e44d8f7cc8db433?pvs=21',
    image: 'TW1.jpg',
  },
  {
    title: 'Nekorobka hobby kits',
    href: 'https://www.notion.so/Nekorobka-hobby-kits-14db2b33972b81debef9fc75d541b8d0?pvs=21',
    image: 'N0.jpg',
  },
  {
    title: 'Illustrations & Design for Foxy Roasters — gift sets, postcards, and stickers',
    href: 'https://www.notion.so/Illustrations-for-Foxy-Roasters-a-coffee-roaster-and-a-cozy-coffee-shop-305b2b33972b8079a197c7d929da137e?pvs=21',
    image: 'Foxy Roasters.webp',
  },
  {
    title: 'Music covers',
    href: 'https://www.notion.so/Music-Visuals-Design-by-Ekaterina-Zueva-19930e5485884177b52f4472709efeb2?pvs=21',
    image: 'Musicals.webp',
  },
  {
    title: 'Animation for a hobby test',
    href: 'https://ekaterinazueva.notion.site/Nekorobka-animation-for-a-web-service-with-a-hobby-matching-test-14db2b33972b8142b3efca6356c3f70c?pvs=25',
    image: 'Result mokup.jpg',
  },
];

export const howIWork = [
  {
    title: 'Purpose-Driven Design',
    text: 'Every visual decision starts with understanding the purpose of the project. I focus on the message a project needs to communicate and choose visual solutions that support that goal rather than decoration for its own sake.',
  },
  {
    title: 'Clear Communication',
    text: "With over 10 years of freelance experience, I've learned that strong results come from strong communication. I work closely with clients — from initial brief and research to feedback and final delivery — making sure the project direction stays clear and aligned.",
  },
  {
    title: 'Structured Creative Process',
    text: 'I enjoy bringing structure to creative work. This includes clarifying tasks, organizing visual materials, and maintaining a clear workflow throughout the project so ideas can develop into coherent results.',
  },
  {
    title: 'Turning Ideas Into Visual Solutions',
    text: "Many projects begin with abstract ideas or loosely defined requests. I'm comfortable working in this space — researching, experimenting, and developing concepts until they become clear visual outcomes.",
  },
];

export const languages = [
  { name: 'English', level: 'B2' },
  { name: 'Russian', level: 'Native' },
  { name: 'French', level: 'A2' },
];
