import { DoctorType } from '../vite-env';

type OnClickType = {
  onClick: () => void;
};

type DoctorCardType = DoctorType & OnClickType;

export default function DoctorCard({
  name,
  gender,
  specialty,
  image,
  onClick,
}: DoctorCardType) {
  return (
    <div
      onClick={onClick}
      className='flexCenter space-x-2 text-white w-max sm:w-fit blackGradient p-5 rounded-md hover:scale-105 transition-transform hover:shadow hover:shadow-primary cursor-pointer'
    >
      <div className='flex flex-col w-max'>
        <p className='w-max text-xl text-primary'>{name}</p>
        <p className='text-xs mb-5'>{gender}</p>
        <p className='w-max'>{specialty}</p>
      </div>
      <div className='aspect-w-16 aspect-h-9'>
        <img src={image} alt={name} className='w-16' />
      </div>
    </div>
  );
}
