// Hero: главное превью работ (иллюстрации Belgrade)
export const heroImage = 'portrait.jpg';

export const site = {
  name: 'Ekaterina Zueva',
  tagline:
    'Illustrator, Graphic Designer, and 2D Animator with over 10 years of experience.',
  resumeUrl:
    'https://drive.google.com/file/d/1qCuJbGmUzd4aAEDShPzynxy9NtKS0skw/view?usp=sharing',
  notionRu: 'https://www.notion.so/e9023e38cd6b4b00a4b50df22aeb131e?pvs=21',
  email: 'evazu.art@gmail.com',
  telegram: 'https://t.me/Evazu_K',
  telegramLabel: 'Telegram',
  // Fiverr: placeholder — замените на реальную ссылку на профиль
  fiverrUrl: '#',
  fiverrLabel: 'Fiverr',
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

export const portfolioIntro =
  'In over 10 years of work, I have completed more than 60 commercial projects. Including personal projects, the number exceeds 100. Below, I share some of my favorite cases.';

export const portfolioNote =
  'Each preview includes a link to a dedicated page where you can learn more about the project and my work on it.';

export const portfolioIllustrationIntro = [
  'Commercial illustration (for brands, advertising, and media, websites)',
  'Specialized illustration (games, podcasts, music covers)',
  'Applied illustration (diagrams and visual guides for instructions)',
  'Artistic and personal projects',
];

export const portfolioAnimationIntro = [
  'Music videos',
  'Animation for web resources (app openers, short animations for illustrations and logos)',
  'Independent and festival projects',
];

export const portfolioBrandingIntro = [
  'Development of a brand book (brand platform, values, mission, etc.)',
  'Design of logos, corporate identity, and additional graphics',
  'Creation of guidelines, including branded assets, layout rules, and all necessary instructions',
  'Print materials: design, layout, and preparation for printing',
  'Packaging design',
  'Digital Design in Figma (website banners, social media graphics, icons, and other web visuals)',
  'Presentation design for various purposes (product presentations, pitch decks, etc.)',
];

export const illustrationProjects = [
  {
    title: 'A series of illustrations about the brutalist architecture of Belgrade',
    href: 'https://www.notion.so/A-series-of-illustrations-about-the-brutalist-architecture-of-Belgrade-14db2b33972b8177bc76f9c630c1ec58?pvs=21',
    image: 'belgrade.webp',
  },
  {
    title: 'Illustrated stories inspired by Belgrade',
    href: 'https://www.notion.so/Illustrated-stories-inspired-by-Belgrade-14db2b33972b81839965e7e19016830b?pvs=21',
    image: 'Stories Belgrade.webp',
  },
  {
    title: 'Illustrations & Design for Foxy Roasters — gift sets, postcards, and stickers',
    href: 'https://www.notion.so/Illustrations-for-Foxy-Roasters-a-coffee-roaster-and-a-cozy-coffee-shop-305b2b33972b8079a197c7d929da137e?pvs=21',
    image: 'Foxy Roasters.webp',
  },
  {
    title: 'An illustration inspired by Yerevan',
    href: 'https://www.notion.so/An-illustration-inspired-by-Yerevan-14db2b33972b817fbc22fb57d7748cab?pvs=21',
    image: 'Yerevan.webp',
  },
  {
    title: 'Illustrations for a project dedicated to Chinese Tea',
    href: 'https://www.notion.so/Illustrations-for-a-project-dedicated-to-Chinese-Tea-14db2b33972b81e2a836dcb0c8ac9500?pvs=21',
    image: 'Chinese tea.webp',
  },
  {
    title: 'Music Visuals Design by Ekaterina Zueva',
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
  | { type: 'video'; vimeoId: string; projectHref?: string; projectTitle?: string }
  | { type: 'driveVideo'; driveUrl: string; title: string; copyright?: string; googleDriveFileId?: string; projectHref?: string; previewImage?: string }
  | { type: 'project'; title: string; href: string }
  | { type: 'copyright'; text: string }
  | { type: 'link'; label: string; href: string };

export const animationItems: AnimationItem[] = [
  {
    type: 'video',
    vimeoId: '845353993',
    projectTitle: 'Nekorobka: animation for a web service with a hobby matching test',
    projectHref: 'https://ekaterinazueva.notion.site/Nekorobka-animation-for-a-web-service-with-a-hobby-matching-test-14db2b33972b8142b3efca6356c3f70c?pvs=25',
  },
  // Learn with Mochi
  {
    type: 'driveVideo',
    driveUrl: 'https://drive.google.com/file/d/1PowczA7HCLDmQjKxnjI8YmBAbA5TRrI2/view?usp=sharing',
    title: 'Animated opening for Learn With Mochi app',
    copyright: 'All rights and characters reserved to Learn with Mochi company. Unauthorized copying, downloading, or use prohibited.',
    googleDriveFileId: '1PowczA7HCLDmQjKxnjI8YmBAbA5TRrI2',
    previewImage: 'learn-with-mochi-preview.png',
    projectHref: 'https://ekaterinazueva.notion.site/Animated-opening-for-Learn-With-Mochi-app-14db2b33972b81528702fdc8a261b7bb?pvs=25',
  },
  {
    type: 'video',
    vimeoId: '841664288',
    projectTitle: 'Short videos for the Shcha7sec festival',
    projectHref: 'https://www.notion.so/Short-videos-for-the-Shcha7sec-festival-14db2b33972b8124b966ff72f74cd32a?pvs=21',
  },
  {
    type: 'video',
    vimeoId: '380339662',
    projectTitle: 'Animation for a music video by ALLSTATIONS',
    projectHref:
      'https://www.notion.so/Animation-for-a-music-video-by-ALLSTATIONS-14db2b33972b816d884ef6d13d6b599e?pvs=21',
  },
  {
    type: 'link',
    label: 'More Animation Projects on a Separate Page: Animation',
    href: 'https://www.notion.so/Animation-352de9a9021f40389183818bfe41bf3d?pvs=21',
  },
];

export const learnWithMochiDriveUrl =
  'https://drive.google.com/file/d/1PowczA7HCLDmQjKxnjI8YmBAbA5TRrI2/view?usp=sharing';

export const brandingProjects = [
  {
    title: 'Branding and visual identity for Chinese tea gift sets',
    href: 'https://www.notion.so/Branding-and-visual-identity-for-Chinese-tea-gift-sets-14db2b33972b81e09e44d8f7cc8db433?pvs=21',
    image: 'tea branding.webp',
  },
  {
    title: 'Channel design and creative concepts for the workplace culture media Provodnik',
    href: 'https://www.notion.so/Channel-design-and-creative-concepts-for-the-workplace-culture-media-Provodnik-14db2b33972b81ae992eca9f253cce6b?pvs=21',
    image: 'channel_design.webp',
  },
  {
    title: 'Style for a YouTube channel about healthy workplace culture',
    href: 'https://www.notion.so/Style-for-a-YouTube-channel-about-healthy-workplace-culture-14db2b33972b81f9a07acea114721a16?pvs=21',
    image: 'YouTube style.webp',
  },
  {
    title: 'Design for the Easy Code project',
    href: 'https://www.notion.so/Design-for-the-Easy-Code-project-14db2b33972b8137b685c60a8be0ef58?pvs=21',
    image: 'Easy Code.webp',
  },
  {
    title: 'Web service with a Hobby-Finding test',
    href: 'https://www.notion.so/Web-service-with-a-Hobby-Finding-test-14db2b33972b816eaac8d3b1da788369?pvs=21',
    vimeoId: '845340641',
  },
  {
    title: 'Nekorobka hobby kits',
    href: 'https://www.notion.so/Nekorobka-hobby-kits-14db2b33972b81debef9fc75d541b8d0?pvs=21',
    image: 'nekorobka.webp',
  },
  {
    title: 'Presentations',
    href: 'https://drive.google.com/file/d/1QVhZGg9LyuqdDs1e4Dtthz0RRsztH_P7/view?usp=sharing',
    embedDriveId: '1QVhZGg9LyuqdDs1e4Dtthz0RRsztH_P7',
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

export const tools = [
  'Adobe Photoshop',
  'Adobe Illusatrator',
  'Adobe InDesign',
  'Adobe After Effects',
  'Figma',
  'Power Point',
];

export const languages = [
  { name: 'English', level: 'B2' },
  { name: 'Russian', level: 'Native' },
  { name: 'French', level: 'A2' },
];

/** Ссылки на кейсы для русской версии (ekaterinazueva.notion.site) */
export const ruIllustrationHrefs: (string | null)[] = [
  'https://ekaterinazueva.notion.site/12eb2b33972b8066a050ccf0dbc49ed6?pvs=25',
  'https://ekaterinazueva.notion.site/12eb2b33972b806b9969fb27d6ee3a48?pvs=25',
  'https://ekaterinazueva.notion.site/Foxy-Roasters-305b2b33972b80ff8b5ec2e3d7a8b30c?pvs=25',
  'https://ekaterinazueva.notion.site/105b2b33972b80068d9cc96c4f693703?pvs=25',
  'https://ekaterinazueva.notion.site/265de66fe8bc45b6aeb50c94d472f9ae?pvs=25',
  null,
  'https://ekaterinazueva.notion.site/nekorobka-b4ed62aec5474c0ab94e9447c13191ed?pvs=25',
];

export const ruAnimationHrefs: string[] = [
  'https://ekaterinazueva.notion.site/Nekorobka-12eb2b33972b8020b2ecf32fb62ba635?pvs=25',
  'https://ekaterinazueva.notion.site/Learn-With-Mochi-12eb2b33972b8027a4becdcded21bb10?pvs=25',
  'https://ekaterinazueva.notion.site/shcha7sec-12eb2b33972b801f9b8bf00dbc409e07?pvs=25',
  'https://ekaterinazueva.notion.site/ALLSTATIONS-12eb2b33972b8023ab03f171e24ee949?pvs=25',
];

export const ruBrandingHrefs: string[] = [
  'https://ekaterinazueva.notion.site/12eb2b33972b80cda8fde10509921267?pvs=25',
  'https://ekaterinazueva.notion.site/131b2b33972b808e91c1fcd5b7a2223f?pvs=25',
  'https://ekaterinazueva.notion.site/Youtube-12eb2b33972b8009b501d79da280043b?pvs=25',
  'https://ekaterinazueva.notion.site/Easy-Code-12eb2b33972b805ba69ae1959f94b5fe?pvs=25',
  'https://ekaterinazueva.notion.site/afdb213a53bb4ab3bcbb72245ef461b8?pvs=25',
  'https://ekaterinazueva.notion.site/Nekorobka-12eb2b33972b806ab1d9c3e18c2a8845?pvs=25',
  'https://ekaterinazueva.notion.site/131b2b33972b8097ac54e94bfd430f34?pvs=25',
];
