import BookingForm from './components/BookingForm';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-secondary'>
      <Navbar />
      <section id='hero' className='h-screen'>
        <Hero />
      </section>
      <section id='booking' className='h-screen'>
        <BookingForm />
      </section>
      <section id='testimonials' className='h-screen'>
        Testimonials
      </section>
    </div>
  );
}

export default App;
