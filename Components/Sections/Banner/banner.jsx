import React from 'react';
import IMG_1 from '../../../assets/riseup.png';
import IMG_2 from '../../../assets/knowyour_ix.png';
import IMG_3 from '../../../assets/girltrek3.png';
import IMG_4 from '../../../assets/future.png';
import IMG_5 from '../../../assets/rights4girls.png';
import ICON_1 from '../../../assets/easy-to-use_96x.png';
import ICON_2 from '../../../assets/peace-of-mind_96x.png';
import ICON_3 from '../../../assets/non-violent_96x.png';
import ICON_4 from '../../../assets/plane_96x.png';
import './style.css';

export default function banner(props) {
  return (
    <div className='banner'>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      {
        props.whichCards === 'bigCards' ?
          <div className="show-cards">
            <div className="card">
              <img src={ICON_1} alt='first' />
              <h1>Easy to use</h1>
              <p>No more struggling with pepper spray or tasers. Just pull the Birdie alarm to activate. Anyone can use Birdie, from young children to grandparents.</p>
            </div>
            <div className="card">
              <img src={ICON_2} alt='second' />
              <h1>Peace of mind</h1>
              <p>We hope that you never have to use her, but you can feel safer knowing that you have Birdie on your keychain.</p>
            </div>
            <div className="card">
              <img src={ICON_3} alt='third' />
              <h1>Non-Violent</h1>
              <p>Traditional self-defense tools require you to fight. Birdie is designed to deter attackers by creating a diversion and drawing the attention of anyone near you.</p>
            </div>
            <div className="card">
              <img src={ICON_4} alt='fourth' />
              <h1>Travel Safe</h1>
              <p>Unlike pepper spray and tasers, you can take Birdie with you wherever you go.</p>
            </div>
          </div>
          : props.whichCards === 'imageCards' ?
            <div className="show-cards image">
              <div className="card image">
                <img src={IMG_1} alt='first' />
              </div>
              <div className="card image">
                <img src={IMG_2} alt='second' />
              </div>
              <div className="card image">
                <img src={IMG_3} alt='third' />
              </div>
              <div className="card image">
                <img src={IMG_4} alt='fourth' />
              </div>
              <div className="card image">
                <img src={IMG_5} alt='fourth' />
              </div>
            </div>
          : null
      }
    </div>
  )
}
