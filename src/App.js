import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import About from './components/AboutSection/About';
import Features from './components/FeaturesSection/Features';
import Price from './components/PriceSection/Price';
import Gallery from './components/GallerySection/Gallery';
import Footer from './components/FooterSection/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Features></Features>
      <Price></Price>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
