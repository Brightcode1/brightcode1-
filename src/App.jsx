import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Technologies from './pages/Technologies';
import Industries from './pages/Industries';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DigitalMarketing from './pages/DigitalMarketing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="industries" element={<Industries />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
