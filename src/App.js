import './App.css';
import Cards from './Components/Cards/Cards';
import Discount from './Components/Discount/Discount';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';
import Staff from './Components/Staff/Staff';
import Tours from './Components/Tours/Tours';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cards />
      <Tours />
      <Discount />
      <Review />
      <Staff />
      <Footer/>
    </div>
  );
}

export default App;
