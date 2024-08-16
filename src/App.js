import { Fragment } from 'react';

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Head } from './components/Head';
import { HeroBgBox } from './components/HeroBgBox';
import { SliderSection } from './components/SliderSection';
import { ServiceSection } from './components/ServiceSection';
import { AboutSection } from './components/AboutSection';
import { Why_section } from './components/Why_section';
import { Team_section } from './components/Team_section';
import { Client_section } from './components/Client_section';
import { Info_section } from './components/Info_section';


function App() {
  return (
    <Fragment>
     
      <Head />
      <body>
        <div className="hero_area">
          <HeroBgBox />
          <Header />
          <SliderSection />
        </div>
        <ServiceSection />
        
        <AboutSection />
        <Why_section />
        <Team_section />
        <Client_section />
        <Info_section />
        <Footer />
            //  !--jQery --
        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
            //!--popper js--
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
        </script>
            //!--bootstrap js--
        <script type="text/javascript" src="js/bootstrap.js"></script>
            //!--owl slider--
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
        </script>
            //!--custom js--
        <script type="text/javascript" src="js/custom.js"></script>
            //!--Google Map--
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap">
        </script>
            //!--End Google Map--

      </body>
    </Fragment>
  );
}

export default App;
