import {
  MdOutlineBook,
  MdOutlineLiveTv,
  MdOutlinePerson,
  MdOutlineRadio,
  MdOutlineTravelExplore,
} from 'react-icons/md'

export const navLinks = [
  { id: 1, name: 'الاذاعات', icon: MdOutlineRadio, route: '/' },
  { id: 2, name: 'السور', icon: MdOutlineBook, route: '/soar' },
  { id: 3, name: 'القراء', icon: MdOutlinePerson, route: '/reciters' },
  { id: 4, name: 'مباشر', icon: MdOutlineLiveTv, route: '/live' },
  { id: 5, name: 'تفاسير', icon: MdOutlineTravelExplore, route: '/tafasir' },
]
