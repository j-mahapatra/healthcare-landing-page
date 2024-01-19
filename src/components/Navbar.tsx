import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

import { navbarLinks } from '../lib/constants';
import { NavbarItemType } from '../vite-env';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className='sticky flex w-full p-5'>
      <div className='flexCenter'>
        <img src='logo.svg' alt='Fix Health' className='w-[135px]' />
      </div>
      <div className='hidden sm:flex space-x-5 flex-1 text-white justify-end items-center'>
        {navbarLinks.map((item: NavbarItem) => (
          <a
            key={item.label}
            href={item.href}
            className='hover:text-primary transition-colors underlineEffect'
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className='relative flex sm:hidden space-x-5 flex-1 text-white justify-end items-center'>
        <button
          className=''
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className='h-6 w-6 text-white hover:text-primary transition-colors' />
          ) : (
            <Bars3Icon className='h-6 w-6 text-white hover:text-primary transition-colors' />
          )}
        </button>
        <div
          className={`absolute flex flex-col bottom-0 right-0 -translate-x-8 translate-y-44 transition-opacity duration-500 rounded-md blackGradient ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {navbarLinks.map((item: NavbarItemType) => (
            <a
              key={item.label}
              href={item.href}
              className='hover:text-primary transition-colors text-white py-3 px-8'
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
