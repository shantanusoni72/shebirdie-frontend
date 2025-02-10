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
              <img src='assets/easy-to-use_96x.png' alt='first' />
              <h1>Easy to use</h1>
              <p>No more struggling with pepper spray or tasers. Just pull the Birdie alarm to activate. Anyone can use Birdie, from young children to grandparents.</p>
            </div>
            <div className="card">
              <img src='assets/peace-of-mind_96x.png' alt='second' />
              <h1>Peace of mind</h1>
              <p>We hope that you never have to use her, but you can feel safer knowing that you have Birdie on your keychain.</p>
            </div>
            <div className="card">
              <img src='assets/non-violent_96x.png' alt='third' />
              <h1>Non-Violent</h1>
              <p>Traditional self-defense tools require you to fight. Birdie is designed to deter attackers by creating a diversion and drawing the attention of anyone near you.</p>
            </div>
            <div className="card">
              <img src='assets/plane_96x.png' alt='fourth' />
              <h1>Travel Safe</h1>
              <p>Unlike pepper spray and tasers, you can take Birdie with you wherever you go.</p>
            </div>
          </div>
          : props.whichCards === 'imageCards' ?
            <div className="show-cards image">
              <div className="card image">
                <img src='assets/riseup.png' alt='first' />
              </div>
              <div className="card image">
                <img src='assets/knowyour_ix.png' alt='second' />
              </div>
              <div className="card image">
                <img src='assets/girltrek3.png' alt='third' />
              </div>
              <div className="card image">
                <img src='assets/future.png' alt='fourth' />
              </div>
              <div className="card image">
                <img src='assets/rights4girls.png' alt='fourth' />
              </div>
            </div>
          : null
      }
    </div>
  )
}
