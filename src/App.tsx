import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Router>
      <div className='bg-secondary'>
        <Navbar />
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
    </Router>
  );
}

export default App;
