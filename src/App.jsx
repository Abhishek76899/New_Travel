import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Resource from './pages/Resource';
import Meeting from './pages/Meeting';
import HomePage from './pages/HomePage';
import Header from './pages/Header';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/New_Travel" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/meetings-events" element={<Meeting />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
