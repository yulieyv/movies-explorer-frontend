const movies = [
  {
    id: 1,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 2,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 3,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 4,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 5,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 6,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 7,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 8,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 9,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 10,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 11,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 12,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 13,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 14,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 15,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
  {
    id: 16,
    title: '33 слова о дизайне',
    duration: '1ч42м',
    image:
      'https://sun9-37.userapi.com/impg/oxdqCpoUw8pnqKYkkvAWl1AZdVdAoNM47NObCA/VajP4pTbPxY.jpg?size=1280x556&quality=96&sign=c30c78c0c089e6fb0b24090505b37931&c_uniq_tag=Ucp57sfWCyTMh-79VyW7134uAvfVlu5-a16iyDWje3g&type=album',
  },
];

export default movies;
