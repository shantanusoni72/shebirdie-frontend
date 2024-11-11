import React from 'react';
import './style.css';
import ImageLogo from '../../../assets/birdie-logo.png';

export default function footer() {
    return (
        <div className='footer'>
            <div className="row">
                <div className="col first">
                    <img src={ ImageLogo } alt='birdie_logo' />
                    <ul className='social'>
                        <li>
                            <a href="#">
                                <svg aria-hidden="true" width="24px" height="24px" focusable="false" class="icon icon-instagram" viewBox="0 0 18 18">
                                    <path fill="#FFFFFF" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
                                    <path fill="#FFFFFF" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
                                    </path></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg aria-hidden="true" width="44px" height="44px" focusable="false" class="icon icon-tiktok" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.02 0H11s-.17 3.82 4.13 4.1v2.95s-2.3.14-4.13-1.26l.03 6.1a5.52 5.52 0 11-5.51-5.52h.77V9.4a2.5 2.5 0 101.76 2.4L8.02 0z" fill="#FFFFFF">
                                    </path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col second">
                    <h1>Shop</h1>
                    <ul className='shop-list'>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Wholesales</a></li>
                        <li><a href="#">Bulk Orders</a></li>
                        <li><a href="#">How It Works</a></li>
                    </ul>
                </div>
                <div className="col third">
                <h1>Help</h1>
                    <ul className='help-list'>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Ambassador Program</a></li>
                        <li><a href="#">Download Birdie+ App</a></li>
                        <li><a href="#">Birdie+ Product Manual</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p>© 2024, She's Birdie <a href="#">Powered by Shopify</a></p>
            </div>
        </div>
    )
}
