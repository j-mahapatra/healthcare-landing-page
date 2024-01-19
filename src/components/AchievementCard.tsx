import { AchievementType } from '../vite-env';

export default function AchievementCard({
  text1,
  text2,
  Icon,
}: AchievementType) {
  return (
    <div className='relative flexCenter flex-col w-min blackGradient p-2 sm:p-12 rounded-md'>
      {<Icon className='h-12 w-12 text-primary mb-4' />}
      <p className='text-white text-center w-full'>{text1}</p>
      <p className='text-white text-center w-full'>{text2}</p>
      <div className='absolute backgroundGradient h-28 w-28 translate-y-12' />
    </div>
  );
}
