import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DoctorType } from '../vite-env';

import { cities, doctors } from '../lib/constants';
import DoctorCard from './DoctorCard';

function getDoctors(city: string, cityFromURL?: string | null): DoctorType[] {
  const filteredDoctors = doctors.filter((doctor) => {
    if (cityFromURL) {
      return doctor.city === cityFromURL;
    }
    return doctor.city === city;
  });

  return filteredDoctors;
}

export default function BookingForm() {
  const location = useLocation();

  const [name, setName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [age, setAge] = useState<number | string>('');
  const [city, setCity] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [complaints, setComplaints] = useState<string>('');
  const [previousPhysioExperience, setPreviousPhysioExperience] =
    useState<boolean>(false);
  const [cityFromURL, setCityFromURL] = useState<string | null>();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const value = queryParams.get('city');
    setCityFromURL(value);
    console.log(value);
  }, []);

  return (
    <div className='flexCenter w-full flex-col space-y-8 p-5'>
      <p className='text-white text-4xl text-center sm:text-left mt-20'>
        Book an Appointment for <span className='text-primary'>free</span>
      </p>
      <div className='flexCenter w-full py-24 px-16 max-w-xl rounded-md blackGradient'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='flex flex-col w-full space-y-5 text-white'
        >
          <label htmlFor='name'>
            <input
              type='text'
              id='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='formInputField'
            />
          </label>
          <label htmlFor='contactNumber'>
            <input
              type='text'
              id='contactNumber'
              placeholder='Contact Number'
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className='formInputField'
            />
          </label>
          <label htmlFor='age'>
            <input
              type='number'
              id='age'
              placeholder='Age'
              value={age}
              onChange={(e) => setAge(+e.target.value)}
              className='formInputField'
            />
          </label>

          <label htmlFor='company'>
            <input
              type='text'
              id='company'
              placeholder='Company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className='formInputField'
            />
          </label>
          <label htmlFor='complaints'>
            <textarea
              id='complaints'
              placeholder='Chief Complaints'
              value={complaints}
              onChange={(e) => setComplaints(e.target.value)}
              className='formTextareaField'
            />
          </label>
          {parseInt(String(age)) >= 40 && (
            <label
              htmlFor='previousExperience'
              className='flex items-center text-gray-400 text-opacity-75'
            >
              <input
                type='checkbox'
                id='previousExperience'
                className='accent-primary w-4 h-4 mr-2'
                checked={previousPhysioExperience}
                onChange={() => setPreviousPhysioExperience((prev) => !prev)}
              />
              I have previous experience with physiotherapy.
            </label>
          )}
          <label htmlFor='city' className='text-gray-400'>
            <select
              name='cities'
              id='city'
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className='mx-2 bg-transparent outline-none'
            >
              <option value=''>Select City</option>
              {cities.map((city: string) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <p className='text-white text-4xl text-center sm:text-left'>
        Best <span className='text-primary'>Doctors</span> available in your
        city
      </p>
      <div className='flex flex-wrap gap-5 w-full max-w-3xl px-5 justify-around'>
        {getDoctors(city, cityFromURL).map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
}
