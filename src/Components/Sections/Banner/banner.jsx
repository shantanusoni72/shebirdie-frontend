import React from 'react';
import './style.css';

export default function banner(props) {
  return (
    <div className='banner'>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      {
        !props.showCards ? null :
          <div className="show-cards">
            <div className="card">
              <img src='https://www.shesbirdie.com/cdn/shop/files/easy-to-use_96x.png?v=1626102440&em-format=avif' alt='first' />
              <h1>Easy to use</h1>
              <p>No more struggling with pepper spray or tasers. Just pull the Birdie alarm to activate. Anyone can use Birdie, from young children to grandparents.</p>
            </div>
            <div className="card">
            <img src='https://www.shesbirdie.com/cdn/shop/files/peace-of-mind_96x.png?v=1626102441&em-format=avif' alt='second' />
              <h1>Peace of mind</h1>
              <p>We hope that you never have to use her, but you can feel safer knowing that you have Birdie on your keychain.</p>
            </div>
            <div className="card">
            <img src='https://www.shesbirdie.com/cdn/shop/files/non-violent_96x.png?v=1626102441&em-format=avif' alt='third' />
              <h1>Non-Violent</h1>
              <p>Traditional self-defense tools require you to fight. Birdie is designed to deter attackers by creating a diversion and drawing the attention of anyone near you.</p>
            </div>
            <div className="card">
            <img src='https://www.shesbirdie.com/cdn/shop/files/plane_96x.png?v=1626102969&em-format=avif' alt='fourth' />
              <h1>Travel Safe</h1>
              <p>Unlike pepper spray and tasers, you can take Birdie with you wherever you go.</p>
            </div>
          </div>
      }
    </div>
  )
}
