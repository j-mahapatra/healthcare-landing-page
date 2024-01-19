import {
  CalendarDaysIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

import userProfileImage from '../../public/user-profile-image.png';

UserIcon;

export const navbarLinks = [
  {
    label: 'Home',
    href: '',
  },
  {
    label: 'Services',
    href: '',
  },
  {
    label: 'Blogs',
    href: '',
  },
  {
    label: 'About',
    href: '',
  },
];

export const achievements = [
  {
    text1: '20000+',
    text2: 'Patients',
    Icon: UserIcon,
  },
  {
    text1: '1 Lakh+',
    text2: 'Sessions',
    Icon: CalendarDaysIcon,
  },
  {
    text1: '9.6/10',
    text2: 'Average Ratings',
    Icon: StarIcon,
  },
];

export const userTestimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    age: 35,
    problem: 'Chronic knee pain',
    designation: 'Software Engineer',
    rating: 5,
    image: userProfileImage,
    review:
      'Their service transformed my chronic knee pain management with personalized recommendations and user-friendly tracking.',
  },
  {
    id: 2,
    name: 'Bob Smith',
    age: 45,
    problem: 'Shoulder injury recovery',
    designation: 'Marketing Manager',
    rating: 5,
    image: userProfileImage,
    review:
      'Outstanding service! Helped me recover from a shoulder injury with motivating features and effective physical therapy exercises.',
  },
  {
    id: 3,
    name: 'Catherine White',
    age: 28,
    problem: 'Feet injury',
    designation: 'Graphic Designer',
    rating: 5,
    image: userProfileImage,
    review:
      'Invaluable for recovering from months of post-injury pain! Great service.',
  },
  {
    id: 4,
    name: 'David Miller',
    age: 50,
    problem: 'Elbow pain',
    designation: 'Teacher',
    rating: 5,
    image: userProfileImage,
    review:
      'Simplified exercise management! treatment methods are incredibly useful.',
  },
  {
    id: 5,
    name: 'Eva Gonzalez',
    age: 40,
    problem: 'Back pain and posture improvement',
    designation: 'Fitness Trainer',
    rating: 5,
    image: userProfileImage,
    review: 'A must-have for people with back problems! Works like a charm.',
  },
  {
    id: 6,
    name: 'Frank Wilson',
    age: 55,
    problem: 'Neck pain',
    designation: 'Retired',
    rating: 5,
    image: userProfileImage,
    review:
      'Years of neck pain gone in a couple of months. Thank you Fix Health!',
  },
];
