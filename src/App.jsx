import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Experiences from './Components/Experiences';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Loader
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experiences />
      <Project />
      <Contact />
    </>
  );
}

export default App
