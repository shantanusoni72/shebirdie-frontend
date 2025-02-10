import './App.css';
import Header from './Sections/Header/header';
import Alarm from './Sections/Alarm/alarm';
import Footer from './Sections/Footer/footer';
import BirdieShop from './Pages/birdie_shop';

function App() {
  return (<>
    <Alarm text='Black Friday Sale: Up to 40% on Birdie + $35 in FREE GIFTS | Shop Now' />
    <Header />
    <BirdieShop />
    <Footer />
  </>);
}

export default App;