import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import ToastProvider from './providers/ToastProvider';

function App() {
  return (
    <Router>
      <ToastProvider />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
