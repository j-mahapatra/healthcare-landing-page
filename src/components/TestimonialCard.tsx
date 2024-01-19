import { StarIcon } from '@heroicons/react/16/solid';
import { TestimonialType } from '../vite-env';

export default function TestimonialCard({
  name,
  age,
  problem,
  designation,
  rating,
  image,
  review,
}: TestimonialType) {
  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push(i);
  }

  return (
    <div className='relative flexCenter w-full basis-[100%] sm:basis-[30%] blackGradient p-2'>
      <div className='flex flex-col space-y-5 w-full h-max m-5 rounded-md p-2'>
        <p className='text-white text-sm text-center sm:text-left'>
          <span className='text-lg'>{name}</span>, {age}
        </p>
        <p className='text-white text-sm text-center sm:text-left'>
          ({designation})
        </p>
        <p className='text-white text-md font-bold sm:max-w-none text-center sm:text-left'>
          {problem}
        </p>
        <p className='text-white text-sm text-center sm:text-left'>
          "{review}"
        </p>
        <div className='flex justify-center sm:justify-start'>
          {ratingArray.map((rating, index) => (
            <StarIcon
              key={rating + '' + index}
              className='h-4 w-4 text-primary'
            />
          ))}
        </div>
      </div>
      <div className='flex aspect-w-16 aspect-h-9'>
        <img
          src={image}
          alt={name}
          className='hidden md:flex absolute top-6 right-6 w-12'
        />
        <img
          src={image}
          alt={name}
          className='flex md:hidden top-6 right-6 w-32'
        />
      </div>
    </div>
  );
}
