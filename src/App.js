import './App.css';
import Layout from './Components/Layouts/layout';
import Header from './Components/Sections/Header/header';
import Alarm from './Components/Sections/Alarm/alarm';
import Banner from './Components/Sections/Banner/banner';
import Banner2 from './Components/Sections/Banner 2/banner_2';
import Section1 from './Components/Sections/Section-1/section_1';
import Section_1_Image_1 from './assets/section-1-image.png';

function App() {
  return (
    <Layout>
      <Alarm />
      <Header />
      <Banner
        title='1 in 3 women in the U.S. is assaulted in her lifetime.' 
        paragraph='This is personal because it includes 1 in 3 of our daughters, sisters, and friends.'
        showCards={ false }     
      />
      <Section1
        title="When in Doubt, Pull It"
        paragraph="Feeling uncomfortable? Trust your gut. Pull the Top to start the LOUD siren and flashing strobe light, bringing all eyes on you. When you feel safe, reinsert the Top to deactivate the alarm."
        isImage={ false }
      />
      <Banner 
        title='Easy to Use, Easy to Carry' 
        paragraph='Young or old, at home or on the road, Birdie is the easiest way to keep yourself safe'
        showCards={ true }
      />
      <Banner2 />
    </Layout>
  );
}

export default App;
