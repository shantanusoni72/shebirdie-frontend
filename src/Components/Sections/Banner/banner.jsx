import React from 'react';
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
          : props.whichCards === 'imageCards' ?
            <div className="show-cards image">
              <div className="card image">
                <img src='https://www.shesbirdie.com/cdn/shop/files/riseup_200x_0d9e9df8-f162-4d47-bd99-7d53c1b544a6.png?v=1690988593&%3Bwidth=200&em-format=avif&em-width=200' alt='first' />
              </div>
              <div className="card image">
                <img src='https://www.shesbirdie.com/cdn/shop/files/knowyour_200x_0e8d1239-3beb-45e0-a96e-217ec7e6f283.png?v=1690988600&%3Bwidth=200&em-format=avif&em-width=200' alt='second' />
              </div>
              <div className="card image">
                <img src='https://www.shesbirdie.com/cdn/shop/files/girltrek3_200x_38216051-50e3-4484-bb6e-0bc45d3494e8.png?v=1690988600&%3Bwidth=200&em-format=avif&em-width=200' alt='third' />
              </div>
              <div className="card image">
                <img src='https://www.shesbirdie.com/cdn/shop/files/futures_c62a7156-f919-45ff-8bf8-3db54d096dc1.png?v=1690988601&%3Bwidth=200&em-format=avif&em-width=200' alt='fourth' />
              </div>
              <div className="card image">
                <img src='https://www.shesbirdie.com/cdn/shop/files/rights4girls_200x_b30c3336-abd8-4a8c-8d10-0ffba90298c6.png?v=1690988601&%3Bwidth=200&em-format=avif&em-width=200' alt='fourth' />
              </div>
            </div>
          : null
      }
    </div>
  )
}
