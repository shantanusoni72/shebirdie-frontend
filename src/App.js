import './App.css';
import Layout from './Components/Layouts/layout';
import Header from './Components/Sections/Header/header';
import Alarm from './Components/Sections/Alarm/alarm';
import Footer from './Components/Sections/Footer/footer';

import BirdieShop from './Components/Pages/birdie_shop';

function App() {
  return (
    <Layout>
      <Alarm text='Black Friday Sale: Up to 40% on Birdie + $35 in FREE GIFTS | Shop Now' />
      <Header />
      <BirdieShop />
      <Footer />
    </Layout>
  );
}

export default App;
