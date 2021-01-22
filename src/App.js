import MyCarousel from "./components/carousel/carousel.component";
import Navbar from "./components/navbar/navbar.component";
import './App.css';

const App = () => {
  return (
    <div className="App" >
      <MyCarousel/>
      <Navbar />
    </div>
  );
};

export default App;
