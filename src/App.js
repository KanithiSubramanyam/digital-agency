import './App.css';


import Header from './components/header/header';

import Hero from './components/ui/Hero';

import Counter from './components/ui/Counter';

import Services from './components/ui/Services';

import About from './components/ui/About';

import Newsletter from './components/ui/Newsletter';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <Counter />
      <Services />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
