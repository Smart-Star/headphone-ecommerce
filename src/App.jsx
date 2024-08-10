import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Navbar, Banner, Partners, Footer, Popup } from './components';
import { bannerDataOne, bannerDataTwo } from './constants';
import { Blogs, Category, Hero, Products, Services } from './containers';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="container">
        <Navbar />
        <Hero />
        <Category />
        <Services />
        <Banner data={bannerDataOne} />
        <Products />
        <Banner data={bannerDataTwo} />
        <Blogs />
      </div>
      <Partners />
      <Footer />
      <Popup />
    </div>
  );
}
export default App;
