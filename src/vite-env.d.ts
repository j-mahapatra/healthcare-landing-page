/// <reference types="vite/client" />

export type NavbarItemType = { label: string; href: string };

export type AchievementType = {
  text1: string;
  text2: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export type TestimonialType = {
  id: number;
  name: string;
  age: number;
  problem: string;
  designation: string;
  rating: number;
  image: string;
  review: string;
};
