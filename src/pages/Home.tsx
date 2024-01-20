import BookingForm from './../components/BookingForm';
import Hero from './../components/Hero';
import Testimonials from './../components/Testimonials';

export default function Home() {
  return (
    <div className='bg-secondary pt-16'>
      <section id='hero'>
        <Hero />
      </section>
      <section id='booking' className='pb-16'>
        <BookingForm />
      </section>
      <section id='testimonials'>
        <Testimonials />
      </section>
    </div>
  );
}
