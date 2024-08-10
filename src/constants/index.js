import { FaCarSide, FaCheckCircle, FaHeadphones, FaMobileAlt, FaWallet } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import {
  blog1,
  blog2,
  blog3,
  br1,
  br2,
  br3,
  br4,
  br5,
  headphone,
  macbook,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  smartwatch,
  vr,
} from '../assets';

export const menuLinks = [
  { id: 1, href: '/', label: 'Home' },
  { id: 2, href: '#shop', label: 'Shop' },
  { id: 3, href: '#about', label: 'About' },
  { id: 4, href: '#blog', label: 'Blogs' },
];

export const dropDownLinks = [
  { id: 1, href: '#category', label: 'Trending Products' },
  { id: 2, href: '#selling', label: 'Best Selling' },
  { id: 3, href: '#rated', label: 'Top Rated' },
];

export const heroData = [
  {
    id: 1,
    img: headphone,
    subtitle: 'Beats Solo',
    title1: 'Wireless',
    title2: 'Headphone',
  },

  {
    id: 2,
    img: vr,
    subtitle: 'Beats Solo',
    title1: 'Wireless',
    title2: 'Virtual',
  },

  {
    id: 3,
    img: macbook,
    subtitle: 'Beats Solo',
    title1: 'Branded',
    title2: 'Laptops',
  },
];

export const servicesData = [
  {
    id: 1,
    Icon: FaCarSide,
    title: 'Free Shipping',
    description: 'Free Shipping on All Order',
  },

  {
    id: 2,
    Icon: FaCheckCircle,
    title: 'Safe Money',
    description: '30 Days Money Back',
  },

  {
    id: 3,
    Icon: FaWallet,
    title: 'Secure Payment',
    description: 'All Payment Secure',
  },

  {
    id: 4,
    Icon: FaHeadphones,
    title: 'Online Support',
    description: 'Technical Support 24/7',
  },
];

export const bannerDataOne = {
  id: 'selling',
  bgColor: '#f42c37',
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '10 Jan to 28 Jan',
  img: headphone,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  description: 'Lorem ipsum dolor sit amet consectetur elit.',
};

export const bannerDataTwo = {
  id: 'rated',
  bgColor: '#2dcc6f',
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '14 Jan to 28 Jan',
  img: smartwatch,
  title2: 'Smart Solo',
  title3: 'Winter Sale',
  description: 'Lorem ipsum dolor sit amet consectetur elit.',
};

export const productData = [
  {
    id: 1,
    img: p1,
    title: 'Beat Headphone',
    price: '$120',
    aosDelay: '0',
  },

  {
    id: 2,
    img: p2,
    title: 'Rocky Mountain',
    price: '$420',
    aosDelay: '200',
  },

  {
    id: 3,
    img: p3,
    title: 'Goggles',
    price: '$320',
    aosDelay: '400',
  },

  {
    id: 4,
    img: p4,
    title: 'Printed',
    price: '$200',
    aosDelay: '600',
  },

  {
    id: 5,
    img: p5,
    title: 'Beat Headphone',
    price: '$120',
    aosDelay: '0',
  },

  {
    id: 6,
    img: p6,
    title: 'Rocky Mountain',
    price: '$420',
    aosDelay: '200',
  },

  {
    id: 7,
    img: p1,
    title: 'Goggles',
    price: '$320',
    aosDelay: '400',
  },

  {
    id: 8,
    img: p7,
    title: 'Printed',
    price: '$200',
    aosDelay: '600',
  },
];

export const blogData = [
  {
    id: 1,
    img: blog1,
    title: 'How to Choose the perfect smartwatch',
    subtitle:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas praesentium illo corrupti totam dolor mollitia omnis magnam cupiditate necessitatibus',
    published: 'July 27, 2024 by Similoluwa',
    aosDelay: '0',
  },

  {
    id: 2,
    title: 'Selecting the perfect gadget for you',
    subtitle:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas praesentium illo corrupti totam dolor mollitia omnis magnam cupiditate necessitatibus',
    published: 'July 27, 2024 by Boluwatife',
    img: blog2,
    aosDelay: '200',
  },

  {
    id: 3,
    title: 'The appropriate VR headset for your setup',
    subtitle:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas praesentium illo corrupti totam dolor mollitia omnis magnam cupiditate necessitatibus',
    published: 'July 27, 2024 by Omobolaji',
    img: blog3,
    aosDelay: '400',
  },
];

export const partners = [br1, br2, br3, br4, br5];

export const footerLinks = [
  {
    id: 1,
    title: 'Importtant Links',
    links: [
      { id: 1, href: '/', label: 'Home' },
      { id: 2, href: '#shop', label: 'Shop' },
      { id: 3, href: '#about', label: 'About' },
      { id: 4, href: '#blog', label: 'Blogs' },
    ],
  },

  {
    id: 2,
    title: 'Quick Links',
    links: [
      { id: 1, href: '#category', label: 'Trending Products' },
      { id: 2, href: '#selling', label: 'Best Selling' },
      { id: 3, href: '#rated', label: 'Top Rated' },
    ],
  },
];

export const address = [
  {
    id: 1,
    Icon: FaLocationArrow,
    title: 'Maitama District, Abuja',
  },

  {
    id: 2,
    Icon: FaMobileAlt,
    title: '+234 813 454 0483',
  },
];

export const socialIcons = [FaInstagram, FaFacebook, FaLinkedin];
