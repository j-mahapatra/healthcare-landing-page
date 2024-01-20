import { achievements, userTestimonials } from '../lib/constants';
import { AchievementType, TestimonialType } from '../vite-env';
import AchievementCard from './AchievementCard';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <div className='flexCenter p-5 w-full'>
      <div className='flexCenter flex-col w-full'>
        <p className='text-white text-4xl text-center sm:text-left'>
          Our <span className='text-primary'>Achievements</span>
        </p>
        <div className='flex w-full my-12 max-w-3xl space-x-5 justify-between'>
          {achievements.map((achievement: AchievementType) => (
            <AchievementCard
              key={achievement.text2}
              text1={achievement.text1}
              text2={achievement.text2}
              Icon={achievement.Icon}
            />
          ))}
        </div>
        <p className='text-white text-4xl my-12 text-center sm:text-left'>
          Experiences shared by our
          <span className='text-primary'>{' Patients'}</span>
        </p>
        <div className='flex w-full flex-wrap justify-between gap-2'>
          {userTestimonials.map((testimonial: TestimonialType) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
