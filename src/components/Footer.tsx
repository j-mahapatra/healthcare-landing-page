import { footer } from '../lib/constants';

export default function Footer() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full bg-secondary text-white sm:px-5 mt-24'>
        <div className='hidden sm:flex flexCenter h-full w-[30%] p-5'>
          <img src='logo.png' alt='Logo' className='w-50' />
        </div>
        <div className='flex justify-around items-start w-full mt-5 md:mt-5 lg:mt-16 px-5 sm:px-8 md:px-24'>
          <div className='flex flex-col justify-start items-left basis-[33%]'>
            <p className='w-max mb-5 text-left font-bold'>Product</p>
            {footer.product.map((link) => (
              <p key={link} className='cursor-pointer hover:underline mb-2'>{link}</p>
            ))}
          </div>
          <div className='flex flex-col justify-start items-left basis-[33%]'>
            <p className='w-max mb-5 text-left font-bold'>Company</p>
            {footer.company.map((link) => (
              <p key={link} className='cursor-pointer hover:underline mb-2'>{link}</p>
            ))}
          </div>
          <div className='flex flex-col justify-start items-left basis-[33%]'>
            <p className='w-max mb-5 text-left font-bold'>Services</p>
            {footer.services.map((link) => (
              <p key={link} className='cursor-pointer hover:underline mb-2'>{link}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-around py-5'>
            {
                footer.socialMedia.map(image => <img src={image} alt='Social Media Icon' className='h-8 w-8 invert cursor-pointer' />)
            }
      </div>
    </div>
  );
}
