import logo from './logo.svg';
import Fade from "react-reveal/Fade";
import {Parallax} from "react-parallax";
import Conainer from "react-bootstrap/Container";
import MyCarousel from "./components/carousel/carousel.component";
import Title from "./components/title/title.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import './App.css';

function App() {
  return (
    <div className="App" style={{ postion: "relative"}}>
      <MyCarousel />
      <Title />
      <Navbar />
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Services />
        </Slide>
      </Container>
      <div>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
        </Fade>
      </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          {/* <Timeline */}
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

      <hr />
      <Footer />
    </div>
  );
};

export default App;
