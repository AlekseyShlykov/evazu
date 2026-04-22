import type { CaseStudy } from '@/components/CaseStudyModal';
import type { CaseStudyId } from './caseStudyIds';
import type { Locale } from './translations';
import {
  animationOverVideoFr,
  belgradeAtmosphereFr,
  belgradeStoriesFr,
  brutalistBelgradeFr,
  foxyRoastersFr,
  hobbyMatchingAnimationFr,
  homePersonalProjectFr,
  learnWithMochiAnimationFr,
  lineFrameByFrameAnimationFr,
  logoSocialMediaAnimationFr,
  mixedMediaAnimationFr,
  musicVisualsFr,
  nekorobkaHobbyKitsFr,
  nekorobkaInfographicsFr,
  teaBrandingFr,
  yerevanFr,
} from './caseStudiesFr';

const teaBrandingEn: CaseStudy = {
  title: 'Visual identity for Chinese tea sets',
  sections: [
    {
      type: 'paragraph',
      text: 'The task was to develop a visual identity for Chinese tea sets \u2014 not just gift sets or tea assortments, but a comprehensive introduction to the world of Chinese tea. Each set includes everything needed for a tea ceremony: teaware, tea, basic accessories, a video tutorial with a tea master, and simple, visually engaging information about tea types and brewing methods.',
    },
    {
      type: 'image',
      src: '/images/TW1.jpg',
      alt: 'Chinese tea set visual identity \u2014 overview',
    },
    {
      type: 'paragraph',
      text: 'To begin, I created a brief with questions to clarify the brand\u2019s character, values, and vision. Next, I moved on to sketches. Here are my initial drafts.',
    },
    {
      type: 'image',
      src: '/images/TW2.jpg',
      alt: 'Early sketches for the Chinese tea brand',
    },
    {
      type: 'paragraph',
      text: 'For the logo, I chose the image of a gaiwan (a lidded bowl traditionally used to brew Chinese tea). I arranged the brand name so that it looks as if the gaiwan is speaking \u2014 a lively, friendly character inviting viewers into its world. I selected a minimal color palette and simple yet elegant fonts from Paratype (open license).',
    },
    {
      type: 'image',
      src: '/images/TW3.jpg',
      alt: 'Logo and typography for the Chinese tea brand',
    },
    {
      type: 'paragraph',
      text: 'The visual identity is centered around illustration. One of my references was traditional Chinese shadow theater: silhouettes and light textures with splashes of color form the foundation of the visual style. Another source of inspiration came from the names of Chinese teas, which are often vivid and highly illustrative, such as \u201cGolden Eyebrows\u201d, \u201cWhite Peony,\u201d or \u201cBig Red Robe.\u201d',
    },
    {
      type: 'image',
      src: '/images/TW1.jpg',
      alt: 'Chinese tea set visual identity \u2014 illustration style',
    },
    {
      type: 'image',
      src: '/images/TW4.jpg',
      alt: 'Illustrations for Chinese tea visual identity',
    },
    {
      type: 'image',
      src: '/images/TW5.jpg',
      alt: 'Illustrations and applications for Chinese tea brand',
    },
    {
      type: 'paragraph',
      text: 'I created a leaflet that describes the main types of Chinese tea. The printed leaflet folds accordion-style, making it compact enough to fit into any box.',
    },
    {
      type: 'image',
      src: '/images/TW6.jpg',
      alt: 'Leaflet about Chinese tea types \u2014 spread',
    },
    {
      type: 'image',
      src: '/images/TW7.jpg',
      alt: 'Accordion-fold leaflet for tea sets',
    },
    {
      type: 'paragraph',
      text: 'The set also includes a quick guide with basic brewing instructions. I developed a layout with a clear, visually engaging structure and simple line-drawn schematic illustrations.',
    },
    {
      type: 'image',
      src: '/images/TW8.jpg',
      alt: 'Brewing guide with schematic illustrations',
    },
    {
      type: 'paragraph',
      text: 'We also created an adapted version of the guide for online use, presented as straightforward infographics.',
    },
    {
      type: 'image',
      src: '/images/TW9.jpg',
      alt: 'Online brewing guide as infographics',
    },
    {
      type: 'paragraph',
      text: 'Using the brand\u2019s core illustration, I created a variety of supplementary graphics.',
    },
    {
      type: 'image',
      src: '/images/TW10.jpg',
      alt: 'Supplementary brand graphics',
    },
    {
      type: 'image',
      src: '/images/TW11.jpg',
      alt: 'Additional graphics for Chinese tea brand',
    },
    {
      type: 'vimeo',
      vimeoId: '787983811',
      iframeTitle: 'Te with logo',
    },
    {
      type: 'image',
      src: '/images/TW12.jpg',
      alt: 'Chinese tea set visual identity \u2014 final application',
    },
  ],
};


const belgradePairs: { src: string; alt?: string }[] = [
  { src: '/images/1 Backpack.jpg', alt: 'Day 1 — Backpack' },
  { src: '/images/2 Discover.jpg', alt: 'Day 2 — Discover' },
  { src: '/images/3 boots.jpg', alt: 'Day 3 — Boots' },
  { src: '/images/4 exotic.jpg', alt: 'Day 4 — Exotic' },
  { src: '/images/5 Binikulars.jpg', alt: 'Day 5 — Binoculars' },
  { src: '/images/6 trek.jpg', alt: 'Day 6 — Trek' },
  { src: '/images/7 passport.jpg', alt: 'Day 7 — Passport' },
  { src: '/images/8 Hike.jpg', alt: 'Day 8 — Hike' },
  { src: '/images/9 sun.jpg', alt: 'Day 9 — Sun' },
  { src: '/images/10 nomadic.jpg', alt: 'Day 10 — Nomadic' },
  { src: '/images/11 snacks.jpg', alt: 'Day 11 — Snacks' },
  { src: '/images/12 remote.jpg', alt: 'Day 12 — Remote' },
  { src: '/images/13 horizon.jpg', alt: 'Day 13 — Horizon' },
  { src: '/images/14 roam.jpg', alt: 'Day 14 — Roam' },
  { src: '/images/15 guidebook.jpg', alt: 'Day 15 — Guidebook' },
  { src: '/images/16 grungy.jpg', alt: 'Day 16 — Grungy' },
  { src: '/images/17 journal.jpg', alt: 'Day 17 — Journal' },
  { src: '/images/18 Drive.jpg', alt: 'Day 18 — Drive' },
  { src: '/images/19 ridge.jpg', alt: 'Day 19 — Ridge' },
  { src: '/images/20 uncharted.jpg', alt: 'Day 20 — Uncharted' },
  { src: '/images/21 rhinoceros.jpg', alt: 'Day 21 — Rhinoceros' },
  { src: '/images/22 camp.jpg', alt: 'Day 22 — Camp' },
  { src: '/images/23 rust.jpg', alt: 'Day 23 — Rust' },
  { src: '/images/24 expedition.jpg', alt: 'Day 24 — Expedition' },
  { src: '/images/25 scarecrow.jpg', alt: 'Day 25 — Scarecrow' },
  { src: '/images/26 camera.jpg', alt: 'Day 26 — Camera' },
  { src: '/images/27 road.jpg', alt: 'Day 27 — Road' },
  { src: '/images/28 jumbo.jpg', alt: 'Day 28 — Jumbo' },
  { src: '/images/29 navigator.jpg', alt: 'Day 29 — Navigator' },
  { src: '/images/30 violin.jpg', alt: 'Day 30 — Violin' },
  { src: '/images/31 landmark.jpg', alt: 'Day 31 — Landmark' },
  { src: '/images/32 boat.jpg', alt: 'Day 32 — Boat' },
  { src: '/images/33 mostar.jpg', alt: 'Day 33 — Mostar' },
  { src: '/images/34 fishing.jpg', alt: 'Day 34 — Fishing' },
];

const belgradeCaseEn: CaseStudy = {
  title: 'Illustrated Stories in Comic Style',
  sections: [
    {
      type: 'paragraph',
      text: 'This project started during the international online art challenge Inktober. It takes place every October and brings together artists from all over the world to draw every day throughout the month. Each year, an official prompt list is provided \u2014 31 words, one for each day of October.',
    },
    {
      type: 'paragraph',
      text: 'Inspired by the prompts, I created sketches and told short stories connected to my life in Serbia and Belgrade. The result was a series of illustrations.',
    },
    {
      type: 'imageGrid',
      images: belgradePairs,
      columns: 2,
      fixedTwoColumns: true,
    },
    {
      type: 'paragraph',
      text: 'I also continued drawing after the prompt ended and printed a series of postcards with these illustrations.',
    },
    {
      type: 'paragraph',
      text: 'The illustrations were also shown at the Ilustrofest 2025 illustration festival.',
    },
    {
      type: 'imageGrid',
      images: [
        { src: '/images/\u0444\u043e\u0442\u043e1.jpg', alt: 'Printed postcards \u2014 photo' },
        { src: '/images/\u0444\u043e\u0442\u043e2.jpg', alt: 'Ilustrofest 2025 \u2014 photo' },
      ],
      fixedTwoColumns: true,
    },
  ],
};


const brutalistBelgradeEn: CaseStudy = {
  title: 'A series of illustrations about the brutalist architecture of Belgrade',
  sections: [
    {
      type: 'paragraph',
      text: 'I am deeply impressed by the scale, diversity, and experimental, bold character of the architecture in many parts of Belgrade. Through style, color, and composition, I tried to capture my emotions, the unique atmosphere, character, and individuality of these buildings. Each illustration is based on research, on-site exploration, and photo documentation.',
    },
    {
      type: 'image',
      src: '/images/BB 1.jpg',
      alt: 'Brutalist architecture in Belgrade — illustration',
    },
    {
      type: 'image',
      src: '/images/BB 2.jpg',
      alt: 'Brutalist architecture in Belgrade — illustration',
    },
    {
      type: 'image',
      src: '/images/BB 3.jpg',
      alt: 'Brutalist architecture in Belgrade — illustration',
    },
    {
      type: 'paragraph',
      text: 'Sketches and photographs: the materials I worked with',
    },
    {
      type: 'image',
      src: '/images/BB 4.jpg',
      alt: 'Sketches and photographs — reference materials',
    },
  ],
};


const yerevanEn: CaseStudy = {
  title: 'Yerevan',
  sections: [
    {
      type: 'image',
      src: '/images/Yerevan1.jpg',
      alt: 'Yerevan illustration',
      fullWidth: true,
    },
    {
      type: 'paragraph',
      text: 'I lived in Yerevan for some time and really loved the city. This illustration shows a place I wanted to capture, along with its atmosphere.\n\nProcess, sketches, and references below.',
    },
    {
      type: 'image',
      src: '/images/Yerevan2.jpg',
      alt: 'Yerevan — process, sketches, and references',
    },
  ],
};


const belgradeAtmosphereEn: CaseStudy = {
  title: 'Belgrade Atmosphere, Illustration Series',
  sections: [
    {
      type: 'paragraph',
      text: 'This series can be seen as a continuation of my work on Belgrade architecture, but the focus here is broader than individual buildings. It captures sketches from the streets and suburbs, aiming to convey the beauty of everyday life and moments full of energy, with the distinct vibe of Belgrade that I grew fond of.',
    },
    {
      type: 'image',
      src: '/images/BA1.jpg',
      alt: 'Belgrade Atmosphere — illustration',
    },
    {
      type: 'image',
      src: '/images/BA2.jpg',
      alt: 'Belgrade Atmosphere — illustration',
    },
    {
      type: 'image',
      src: '/images/BA3.jpg',
      alt: 'Belgrade Atmosphere — illustration',
    },
    {
      type: 'image',
      src: '/images/BA4.jpg',
      alt: 'Belgrade Atmosphere — illustration',
    },
    {
      type: 'image',
      src: '/images/BA5.jpg',
      alt: 'Belgrade Atmosphere — illustration',
    },
    {
      type: 'paragraph',
      text: 'I wanted to bring these stories to life not only digitally, but also physically. So I created a series of postcards, for anyone who would like to keep a small piece of Belgrade seen through my eyes.',
    },
    {
      type: 'image',
      src: '/images/BA6.jpg',
      alt: 'Belgrade Atmosphere — postcards',
    },
    {
      type: 'paragraph',
      text: 'I created them as static images, adding subtle animation to enhance the sense of atmosphere.',
    },
    {
      type: 'vimeo',
      vimeoId: '1180511669',
      iframeTitle: 'Suburban bus stop',
      vimeoPaddingTop: '70.69%',
      vimeoAutoplay: true,
    },
    {
      type: 'vimeo',
      vimeoId: '1180515350',
      iframeTitle: 'The Spirit of Christmas Past',
      vimeoPaddingTop: '74.06%',
      vimeoAutoplay: true,
    },
    {
      type: 'link',
      label: 'Instagram reel',
      href: 'https://www.instagram.com/reel/DJOfA_qCrUF/?igsh=bnd1YjAzZms0MjMy',
    },
    {
      type: 'link',
      label: 'Instagram reel',
      href: 'https://www.instagram.com/reel/DK_2BfrIqKr/?igsh=cTk1bjFrbTJtb2py',
    },
  ],
};


const musicVisualsEn: CaseStudy = {
  title: 'Music Visuals Design',
  sections: [
    {
      type: 'paragraph',
      text: 'I often collaborate with musicians, creating covers, album designs, and artwork. Here I\u2019ve collected some of my favorite projects. Working on covers gives me a lot of creative freedom, so I like to experiment with different techniques.',
    },
    {
      type: 'imageHalf',
      imageHalfLayout: 'single',
      src: '/images/COV1.jpg',
      alt: 'Music visuals \u2014 cover artwork',
    },
    {
      type: 'image',
      src: '/images/COV2.jpg',
      alt: 'Music visuals \u2014 cover artwork',
      fullWidth: true,
      imageWideBanner: true,
    },
    {
      type: 'imageGrid',
      images: [
        { src: '/images/COV3.jpg', alt: 'Music visuals \u2014 cover artwork' },
        { src: '/images/COV4.jpg', alt: 'Music visuals \u2014 cover artwork' },
      ],
      fixedTwoColumns: true,
    },
    {
      type: 'paragraph',
      text: 'Cover artwork for a podcast about the Russian underground music scene.',
    },
    {
      type: 'imageHalf',
      imageHalfLayout: 'single',
      src: '/images/COV6.jpg',
      alt: 'Podcast cover \u2014 Russian underground music',
    },
    {
      type: 'paragraph',
      text: 'A print-ready album cover and a series of artworks for the band Marsohod 1. Besides the cover, I created an illustration for this album on a sheet approximately 1 meter by 1.5 meters, which was later used for promotional visuals and merchandise.',
    },
    {
      type: 'imageGrid',
      images: [
        { src: '/images/COV7.jpg', alt: 'Marsohod 1 \u2014 album artwork' },
        { src: '/images/COV8.jpg', alt: 'Marsohod 1 \u2014 album artwork' },
      ],
      fixedTwoColumns: true,
    },
    {
      type: 'imageGrid',
      images: [
        { src: '/images/COV9.jpg', alt: 'Marsohod 1 \u2014 artwork' },
        { src: '/images/COV10.jpg', alt: 'Marsohod 1 \u2014 artwork' },
        { src: '/images/COV11.jpg', alt: 'Marsohod 1 \u2014 artwork' },
      ],
      singleColumn: true,
    },
    {
      type: 'paragraph',
      text: 'More artworks for the band Marsohod 1',
    },
    {
      type: 'imageHalf',
      imageHalfLayout: 'single',
      src: '/images/COV12.jpg',
      alt: 'Marsohod 1 \u2014 artwork',
    },
    {
      type: 'paragraph',
      text: 'This is photogram, I\u2019ve made in my bathroom',
    },
    {
      type: 'imageGrid',
      images: [
        { src: '/images/COV13.jpg', alt: 'Photogram' },
        { src: '/images/COV14.jpg', alt: 'Photogram' },
      ],
      fixedTwoColumns: true,
    },
    {
      type: 'imageHalf',
      imageHalfLayout: 'single',
      src: '/images/COV15.jpg',
      alt: 'Marsohod 1 \u2014 collage artwork',
    },
    {
      type: 'imageGrid',
      images: [
        { src: '/images/COV16.jpg', alt: 'Marsohod 1 \u2014 collage' },
        { src: '/images/COV17.jpg', alt: 'Marsohod 1 \u2014 collage' },
      ],
      fixedTwoColumns: true,
    },
    {
      type: 'paragraph',
      text: 'The most part of the work was done in material using collage technique.',
    },
    {
      type: 'imageGrid',
      images: [{ src: '/images/COV18.jpg', alt: 'Marsohod 1 \u2014 collage artwork' }],
      singleColumn: true,
    },
    {
      type: 'paragraph',
      text: 'Covers for the musician Dmitry Rakov.',
    },
    {
      type: 'imageHalf',
      imageHalfLayout: 'pair',
      images: [
        { src: '/images/COV19.jpg', alt: 'Dmitry Rakov \u2014 cover' },
        { src: '/images/COV20.jpg', alt: 'Dmitry Rakov \u2014 cover' },
      ],
    },
    {
      type: 'paragraph',
      text: 'I also occasionally create covers as part of a personal challenge, inspired by songs I love. This one is dedicated to \u201cThe Sleepless\u201d by Red Snapper.',
    },
    {
      type: 'imageHalf',
      imageHalfLayout: 'single',
      src: '/images/COV21.jpg',
      alt: 'Cover inspired by Red Snapper \u2014 The Sleepless',
    },
  ],
};


const foxyRoastersEn: CaseStudy = {
  title: 'Illustrations & Design for Foxy Roasters',
  sections: [
    {
      type: 'paragraph',
      text: 'A series of illustrations for a coffee roaster with his own cafe. For the New Year, the client wanted to create gift sets featuring postcards and branded coffee stickers. The task was to design illustrations and prepare print-ready layouts for the stickers and postcards.',
    },
    {
      type: 'paragraph',
      text: 'The key character chosen was the brand mascot \u2014 a fox. The character needed development, as previous versions were inconsistent and lacked a unified design. After several sketch iterations, I created a finalized look and placed the fox in scenarios related to coffee, roasting, and caf\u00e9 life.',
    },
    {
      type: 'image',
      src: '/images/FR 1.jpg',
      alt: 'Foxy Roasters illustrations',
    },
    {
      type: 'image',
      src: '/images/FR 2.jpg',
      alt: 'Foxy Roasters character development',
    },
    {
      type: 'image',
      src: '/images/FR 3.jpg',
      alt: 'Foxy Roasters scenes',
    },
    {
      type: 'paragraph',
      text: 'I also designed several types of stickers and postcards and prepared print-ready layouts.',
    },
    {
      type: 'imageGrid',
      images: [
        { src: '/images/\u041d\u0430\u043a\u043b\u0435\u0439\u043a\u04381.jpg', alt: 'Foxy Roasters stickers — sheet 1' },
        { src: '/images/\u041d\u0430\u043a\u043b\u0435\u0439\u043a\u04382.jpg', alt: 'Foxy Roasters stickers — sheet 2' },
      ],
      singleColumn: true,
    },
    {
      type: 'image',
      src: '/images/\u0444\u043e\u0442\u043e 1.jpg',
      alt: 'Printed postcards photo',
    },
    {
      type: 'paragraph',
      text: 'Each postcard includes a small, custom-designed illustration placed in the stamp area.',
    },
    {
      type: 'image',
      src: '/images/\u041d\u0430\u043a\u043b\u0435\u0439\u043a\u04383.jpg',
      alt: 'Foxy Roasters — stamp area illustration detail',
    },
    {
      type: 'image',
      src: '/images/\u0444\u043e\u0442\u043e 2.jpg',
      alt: 'Printed postcards and stickers — photo',
    },
  ],
};


const nekorobkaHobbyKitsEn: CaseStudy = {
  title: 'Nekorobka hobby kits',
  sections: [
    {
      type: 'paragraph',
      text:
        'In 2020, I joined a startup focused on developing hobby kits. Each kit was designed as a complete first step into a new hobby, packed in a box and including all the necessary materials, a video lesson, clear instructions, and access to a support chat.\nOur goal was to popularize the idea of having hobbies, encourage people to try different ones, overcome the fear of experimenting, and broaden their horizons.',
    },
    {
      type: 'image',
      src: '/images/N1.jpg',
      alt: 'Nekorobka hobby kits',
    },
    {
      type: 'paragraph',
      text:
        'I joined the project as a founding designer, developing its visual identity and creating illustrations, packaging, and supporting materials. We released nine kits, developed a web service to help users find the perfect hobby, and sold over 10,000 kits.',
    },
    {
      type: 'image',
      src: '/images/N5.jpg',
      alt: 'Nekorobka hobby kits — packaging',
    },
    {
      type: 'paragraph',
      text:
        'The challenge was to create a system that could support a wide range of hobby kits, each with its own character, while maintaining a cohesive product experience. Some experts wanted to design their own kits — in these cases, I guided the visual direction, coordinated the process, and finalized the designs to ensure consistency. 7 out of 9 kits were designed by me.',
    },
    {
      type: 'heading',
      text: 'Tie-dye kit',
    },
    {
      type: 'paragraph',
      text:
        'From the start, I knew the design needed to feature vibrant paint splashes blending into one another, evoking creative associations.',
    },
    {
      type: 'paragraph',
      text:
        'The final design, which was printed, was hand-drawn by me on paper, then scanned, processed, and prepared for print.',
    },
    {
      type: 'image',
      src: '/images/N2.jpg',
      alt: 'Tie-dye kit — design',
    },
    {
      type: 'paragraph',
      text: 'We also created a mini kit, whose design was based on the main version.',
    },
    {
      type: 'image',
      src: '/images/N3.jpg',
      alt: 'Tie-dye mini kit',
    },
    {
      type: 'heading',
      text: 'Polymer clay kit',
    },
    {
      type: 'paragraph',
      text:
        'This kit invites users to create decorative elements for a cup using polymer clay. The elements are various sweets, so I used photos provided by the expert, the colors of the clay, and the theme of sweets as references.',
    },
    {
      type: 'image',
      src: '/images/N4.jpg',
      alt: 'Polymer clay kit — design',
    },
    {
      type: 'heading',
      text: 'Additional graphics, materials and photo',
    },
    {
      type: 'image',
      src: '/images/N6.jpg',
      alt: 'Nekorobka — additional graphics and materials',
    },
    {
      type: 'paragraph',
      text:
        'We also needed a variety of additional graphics to support social media content, marketplace profiles, online channels, and printed materials such as gift certificates.',
    },
    {
      type: 'image',
      src: '/images/N7.jpg',
      alt: 'Nekorobka — graphics and photo',
    },
    {
      type: 'paragraph',
      text:
        'To diversify our social media presence, I created simple entertaining animations.',
    },
    {
      type: 'vimeoRow',
      vimeoItems: [
        {
          vimeoId: '1182644854',
          iframeTitle: 'mini soap video',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
        {
          vimeoId: '1182642161',
          iframeTitle: 'Nekorobka certificate',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
      ],
    },
  ],
};


const nekorobkaInfographicsSeries1: { src: string; alt: string }[] = [
  { src: '/images/I1.jpg', alt: 'Infographic — benefits of hobbies, 1 of 6' },
  { src: '/images/I2.jpg', alt: 'Infographic — benefits of hobbies, 2 of 6' },
  { src: '/images/I3.jpg', alt: 'Infographic — benefits of hobbies, 3 of 6' },
  { src: '/images/I4.jpg', alt: 'Infographic — benefits of hobbies, 4 of 6' },
  { src: '/images/I5.jpg', alt: 'Infographic — benefits of hobbies, 5 of 6' },
  { src: '/images/I6.jpg', alt: 'Infographic — benefits of hobbies, 6 of 6' },
];

const nekorobkaInfographicsSeries2: { src: string; alt: string }[] = [
  { src: '/images/I7.jpg', alt: 'Infographic — hobbies of literary characters, 1 of 6' },
  { src: '/images/I8.jpg', alt: 'Infographic — hobbies of literary characters, 2 of 6' },
  { src: '/images/I9.jpg', alt: 'Infographic — hobbies of literary characters, 3 of 6' },
  { src: '/images/I10.jpg', alt: 'Infographic — hobbies of literary characters, 4 of 6' },
  { src: '/images/I11.jpg', alt: 'Infographic — hobbies of literary characters, 5 of 6' },
  { src: '/images/I12.jpg', alt: 'Infographic — hobbies of literary characters, 6 of 6' },
];

const nekorobkaInfographicsEn: CaseStudy = {
  title: 'Illustrated Infographics for the nekorobka Project',
  sections: [
    {
      type: 'paragraph',
      text:
        'At the startup nekorobka, we developed kits for various hobbies. These weren’t just simple boxes, but a complete first step into exploring a hobby that our potential clients might have known little about or only heard of before. We approached each hobby with great depth and took on the task of making it more accessible and appealing.\nAs part of this effort, I created infographics like this one, presenting interesting and useful facts in a simple format with memorable visuals.',
    },
    {
      type: 'heading',
      text: 'Series 1: The benefits of hobbies',
    },
    {
      type: 'imageGrid',
      images: nekorobkaInfographicsSeries1,
      columns: 2,
      fixedTwoColumns: true,
    },
    {
      type: 'heading',
      text: 'Series 2: Hobbies of literary characters',
    },
    {
      type: 'imageGrid',
      images: nekorobkaInfographicsSeries2,
      columns: 2,
      fixedTwoColumns: true,
    },
  ],
};

const hobbyMatchingAnimationEn: CaseStudy = {
  title: 'Animation for a hobby matching test',
  sections: [
    {
      type: 'paragraph',
      text:
        'This case was created for Nekorobka, a company that develops hobby kits.',
    },
    {
      type: 'link',
      label: 'Nekorobka hobby kits',
      href: 'https://evazu.art/design/?case=nekorobka-hobby-kits',
    },
    {
      type: 'paragraph',
      text:
        'We developed a web service for hobby matching that includes a test based on the “Big Five Personality Traits” model. In addition to the kits, this self-assessment test was designed to help people who are unsure which hobby to try.',
    },
    {
      type: 'paragraph',
      text:
        'My task was to create a character that would become the “face” of the test: approachable, friendly, and with subtle references to popular culture. The character acts as a guide throughout the test, making the experience more engaging and easier to navigate.',
    },
    {
      type: 'vimeo',
      vimeoId: '845322690',
      iframeTitle: 'Hello',
      vimeoAutoplay: true,
    },
    {
      type: 'paragraph',
      text:
        'The final character I designed is aligned with the website’s color palette and drawing style. Its outline complements the text blocks, while the subtle gradient fills echo the colorful elements and buttons of the interface.',
    },
    {
      type: 'vimeo',
      vimeoId: '845353993',
      iframeTitle: 'Hobby imp',
      vimeoAutoplay: true,
    },
    {
      type: 'vimeo',
      vimeoId: '845346353',
      iframeTitle: 'Info',
      vimeoAutoplay: true,
    },
    {
      type: 'vimeo',
      vimeoId: '845340641',
      iframeTitle: 'The result',
      vimeoPaddingTop: '52.08%',
      vimeoAutoplay: true,
    },
    {
      type: 'paragraph',
      text:
        'I also created several simple animations to provide guidance and illustrate how the test works.',
    },
    {
      type: 'image',
      src: '/images/GIF.gif',
      alt: 'UI guidance animations in the test interface',
    },
    {
      type: 'nativeVideo',
      videoSrc: '/images/MP4.mp4',
      videoAutoplay: true,
      videoLoop: true,
      videoMuted: true,
    },
  ],
};

const homePersonalProjectEn: CaseStudy = {
  title: 'Home. Personal project',
  sections: [
    {
      type: 'paragraph',
      text: 'A personal project reflecting on the idea of home. Created in Yerevan in spring 2022.',
    },
    {
      type: 'vimeo',
      vimeoId: '710275696',
      iframeTitle: 'Home',
      vimeoMuted: false,
      vimeoLoop: false,
    },
  ],
};


const logoSocialMediaAnimationEn: CaseStudy = {
  title: 'Logo & Social Media Animation',
  sections: [
    {
      type: 'vimeo',
      vimeoId: '1184035324',
      iframeTitle: 'The Fennec Box logo',
      vimeoPaddingTop: '75%',
      vimeoAutoplay: true,
    },
    {
      type: 'vimeo',
      vimeoId: '787983811',
      iframeTitle: 'Te with logo',
      vimeoAutoplay: true,
    },
    {
      type: 'vimeo',
      vimeoId: '1182644854',
      iframeTitle: 'mini soap video',
      vimeoPaddingTop: '100%',
      vimeoAutoplay: true,
    },
    {
      type: 'vimeo',
      vimeoId: '1182642161',
      iframeTitle: 'Nekorobka certificate',
      vimeoPaddingTop: '100%',
      vimeoAutoplay: true,
    },
  ],
};


const learnWithMochiAnimationEn: CaseStudy = {
  title: 'Animation for Learn With Mochi app',
  sections: [
    {
      type: 'paragraph',
      text:
        'Learn With Mochi develops educational kits for children, teaching the basics of programming through simple, engaging stories.',
    },
    {
      type: 'paragraph',
      text:
        'My task was to create an animated opening for the app using the existing characters, from scripting to final implementation.',
    },
    {
      type: 'paragraph',
      text:
        'I started with rough sketches for the scenes, then illustrated the characters and environments in full color as they appear in the final animation (all rights to the characters belong to Learn With Mochi).',
    },
    {
      type: 'imageGrid',
      singleColumn: true,
      images: [
        { src: '/images/LWM 1.jpg', alt: 'Learn With Mochi — rough sketches and scene development' },
        { src: '/images/LWM 2.jpg', alt: 'Learn With Mochi — character and environment illustration' },
        { src: '/images/LWM 3.jpg', alt: 'Learn With Mochi — full-color frames for the opening' },
      ],
    },
    {
      type: 'nativeVideo',
      videoSrc: '/images/LWM меньше.mp4',
      videoMuted: true,
    },
    {
      type: 'paragraph',
      text: 'Additionally, I designed an app icon to complement the project.',
    },
    {
      type: 'image',
      src: '/images/LWM 4.jpg',
      alt: 'Learn With Mochi — app icon',
    },
  ],
};


const lineFrameByFrameAnimationEn: CaseStudy = {
  title: 'Line animation (frame-by-frame)',
  sections: [
    {
      type: 'vimeoRow',
      vimeoRowWrapperClassName: 'mx-auto max-w-3xl',
      vimeoItems: [
        {
          vimeoId: '1184036381',
          iframeTitle: 'Eating yourself alive',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
        {
          vimeoId: '946257606',
          iframeTitle: 'Peace, Sand, Wawes',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
      ],
    },
    {
      type: 'vimeoRow',
      vimeoRowWrapperClassName: 'mx-auto max-w-3xl',
      vimeoItems: [
        {
          vimeoId: '819939401',
          iframeTitle: 'Work',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
        {
          vimeoId: '1184870227',
          iframeTitle: 'Metamorphoses',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
      ],
    },
  ],
};


const mixedMediaAnimationEn: CaseStudy = {
  title: 'Mixed-media animation',
  sections: [
    {
      type: 'vimeoRow',
      vimeoRowWrapperClassName: 'mx-auto max-w-3xl',
      vimeoItems: [
        {
          vimeoId: '469486289',
          iframeTitle: "Thro' the rye",
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
        {
          vimeoId: '456562473',
          iframeTitle: 'Are the trees drinking tea?',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
      ],
    },
    {
      type: 'vimeoRow',
      vimeoRowWrapperClassName: 'mx-auto max-w-3xl',
      vimeoItems: [
        {
          vimeoId: '469497693',
          iframeTitle: 'Salmon',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
        {
          vimeoId: '456544241',
          iframeTitle: 'Mountain breath',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
      ],
    },
    {
      type: 'vimeoRow',
      vimeoRowWrapperClassName: 'mx-auto max-w-3xl',
      vimeoItems: [
        {
          vimeoId: '841664288',
          iframeTitle: 'The opposite window',
          vimeoPaddingTop: '100%',
          vimeoAutoplay: true,
        },
      ],
    },
  ],
};


const animationOverVideoEn: CaseStudy = {
  title: 'Animation over video',
  sections: [
    {
      type: 'vimeo',
      vimeoId: '505248946',
      iframeTitle: 'When are you a character',
      vimeoPaddingTop: '56.25%',
      vimeoAutoplay: true,
    },
    {
      type: 'vimeo',
      vimeoId: '380339662',
      iframeTitle: 'ALLSTATIONS "With me"',
      vimeoPaddingTop: '56.25%',
      vimeoAutoplay: true,
    },
  ],
};

export const caseStudies = {
  'tea-branding': {
    en: teaBrandingEn,
    fr: teaBrandingFr,
  },
  'belgrade-stories': {
    en: belgradeCaseEn,
    fr: belgradeStoriesFr,
  },
  'belgrade-atmosphere': {
    en: belgradeAtmosphereEn,
    fr: belgradeAtmosphereFr,
  },
  'brutalist-belgrade': {
    en: brutalistBelgradeEn,
    fr: brutalistBelgradeFr,
  },
  'yerevan': {
    en: yerevanEn,
    fr: yerevanFr,
  },
  'foxy-roasters': {
    en: foxyRoastersEn,
    fr: foxyRoastersFr,
  },
  'music-visuals': {
    en: musicVisualsEn,
    fr: musicVisualsFr,
  },
  'nekorobka-hobby-kits': {
    en: nekorobkaHobbyKitsEn,
    fr: nekorobkaHobbyKitsFr,
  },
  'nekorobka-infographics': {
    en: nekorobkaInfographicsEn,
    fr: nekorobkaInfographicsFr,
  },
  'hobby-matching-animation': {
    en: hobbyMatchingAnimationEn,
    fr: hobbyMatchingAnimationFr,
  },
  'home-personal-project': {
    en: homePersonalProjectEn,
    fr: homePersonalProjectFr,
  },
  'logo-social-media-animation': {
    en: logoSocialMediaAnimationEn,
    fr: logoSocialMediaAnimationFr,
  },
  'learn-with-mochi-animation': {
    en: learnWithMochiAnimationEn,
    fr: learnWithMochiAnimationFr,
  },
  'line-animation-frame-by-frame': {
    en: lineFrameByFrameAnimationEn,
    fr: lineFrameByFrameAnimationFr,
  },
  'mixed-media-animation': {
    en: mixedMediaAnimationEn,
    fr: mixedMediaAnimationFr,
  },
  'animation-over-video': {
    en: animationOverVideoEn,
    fr: animationOverVideoFr,
  },
} satisfies Record<CaseStudyId, Record<Locale, CaseStudy>>;
