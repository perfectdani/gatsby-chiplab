import Material1Img from '/src/images/material-1.jpeg';
import Material2Img from '/src/images/material-2.jpeg';
import Material3Img from '/src/images/material-3.jpeg';
import Style1Img from '/src/images/style/style-1.jpeg';
import Style2Img from '/src/images/style/style-2.jpeg';
import Style3Img from '/src/images/style/style-3.jpeg';
import Style4Img from '/src/images/style/style-4.jpeg';
import Style5Img from '/src/images/style/style-5.jpeg';
import Style6Img from '/src/images/style/style-6.jpeg';
import Style7Img from '/src/images/style/style-7.jpeg';
import Use1Img from '/src/images/use/use-1.jpeg';
import Use2Img from '/src/images/use/use-2.jpeg';
import Use3Img from '/src/images/use/use-3.jpeg';
import Use4Img from '/src/images/use/use-4.jpeg';
import Use5Img from '/src/images/use/use-5.jpeg';
import Use6Img from '/src/images/use/use-6.jpeg';

export const shopByMaterial = {
  title: 'Shop by Material',
  description: 'Choose from Clay Composite, Clay, and Ceramic Poker Chips',
  categories: [
    {
      name: 'Composite Poker Chips',
      href: '#',
      imageSrc: Material1Img,
      imageAlt: '',
      description:
        'Our original and most popular poker chips. Both faces are customizable. Available various styles. Direct-to-chip printing.\n\n 25 chips for **$25.00**\n\n 100 chips for **$89**\n\n 200 chips for **$158**',
    },
    {
      name: 'Clay Poker Chips',
      href: '#',
      imageSrc: Material2Img,
      imageAlt:
        'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
      description:
        'Slightly heavier than our Composite chips. Feel softer and stack better, but smaller printable area than Composites.\n\n 25 chips for **$28.50**\n\n 100 chips for **$104**\n\n 200 chips for **$188**',
    },
    {
      name: 'Ceramic Poker Chips',
      isDisabled: true,
      href: '#',
      imageSrc: Material3Img,
      imageAlt: '',
      description:
        'Both faces and the rolling edge are customizable. Lighter chip, but they stack well and play well.\n\n 25 chips for **$29.75**\n\n 100 chips for **$109**\n\n 200 chips for **$198**',
    },
  ],
};

export const shopByStyle = {
  title: 'Shop by Style',
  description: 'Choose from our many styles',

  categories: [
    {
      id: 1,
      name: '8 Spot Edge',
      imageSrc: Style1Img,
      description: 'Composite Poker Chips',
    },
    {
      id: 2,
      name: 'Solid Edge',
      imageSrc: Style2Img,
      description: 'Composite Poker Chips',
    },
    {
      id: 3,
      name: '8 Stripe Edge',
      imageSrc: Style3Img,
      description: 'Composite Poker Chips',
    },
    {
      id: 4,
      name: 'Double Strpe Edge',
      imageSrc: Style4Img,
      description: 'Composite Poker Chips',
    },
    {
      id: 5,
      name: '3 Tone Gem',
      imageSrc: Style5Img,
      description: 'Clay Poker Chips',
    },
    {
      id: 6,
      name: '3 Tone',
      imageSrc: Style6Img,
      description: 'Clay Poker Chips',
    },
    {
      id: 7,
      name: '8 Spot 2 Tone',
      imageSrc: Style7Img,
      description: 'Clay Poker Chips',
    },
  ],
};

export const shopByUse = {
  title: 'Shop by Use',
  description: 'Browse templates specific to intended use for our poker chips',
  categories: [
    { id: 1, name: 'Poker Chips', imageSrc: Use1Img },
    { id: 2, name: 'Promotional Chips', imageSrc: Use2Img },
    { id: 3, name: 'Golf Ball Marker Chips', imageSrc: Use3Img },
    { id: 4, name: 'Challenge Coin Chips', imageSrc: Use4Img },
    { id: 5, name: 'Wedding Chip Set', imageSrc: Use5Img },
    { id: 6, name: 'Drink Token Set', imageSrc: Use6Img },
  ],
};
