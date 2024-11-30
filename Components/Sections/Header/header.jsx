import React, { useState } from 'react';
import './style.css';
import BrandLogo from '../../../assets/birdie-logo.png'
import Rating from '../../Utils/Rating/rating';

function toggleMobileMenu() {
  const mobile_menu = document.querySelector('.mobile_menu');
  const menu_svg = document.querySelector('.hamburger .menu')
  const close_svg = document.querySelector('.hamburger .close')

  mobile_menu.classList.toggle('disabled');
  if (mobile_menu.classList.contains('disabled')) {
    close_svg.style.display = 'none';
    menu_svg.style.display = 'inline';
  } else {
    close_svg.style.display = 'inline';
    menu_svg.style.display = 'none';
  }
}

export default function Header() {
  const [showDesktopMenuPart, setDesktopMenuPart] = useState(false);

  return (<>
    <div className='header'>
      <div className="hamburger">
        <svg className='menu' onClick={toggleMobileMenu} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        <svg className='close' onClick={toggleMobileMenu} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
      </div>

      <div className="title">
        <a href='#'><img src={BrandLogo} alt='logo' /></a>
      </div>

      <div className="menu">
        <ul>
          <li><a href='#' onMouseOver={() => setDesktopMenuPart(true)} onMouseOut={() => setDesktopMenuPart(false)}>Shop</a><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Bulk Orders</a></li>
          <li><a href='#'>How It Works</a></li>
        </ul>
      </div>

      <div className="end">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" id="end-svg-1" fill="none" viewBox="0 0 18 19">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
          </path></svg>
        <svg id="end-svg-2" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
          <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
      </div>
    </div>
    {
      showDesktopMenuPart ?
        <div className="shop_menu">
          <div className="shop_menu_1">
            <div className="shop_menu_1_text">
              <div className="shop_menu_1_text_flex">
                <h1>Birdie</h1>
                <p>Best Seller</p>
              </div>
              <div className="shop_menu_1_text_rating">
                <Rating
                  width='18px'
                  height='18px'
                />
                <label>4.8/5 (10,676) Reviews</label>
              </div>
              <p>
                This colorful device has a loud alarm and flashing strobe light designed to deter an
                attack.
              </p>
            </div>
            <div className="shop_menu_1_image">
              <img src='https://www.shesbirdie.com/cdn/shop/files/lavender_e1562650-7af0-4817-aeb4-044199912acc.jpg?v=1694444400&width=200&em-origin=birdie-alarm.myshopify.com&em-format=avif' alt='product' />
            </div>
          </div>
          <div className="shop_menu_1">
            <div className="shop_menu_1_text">
              <div className="shop_menu_1_text_flex">
                <h1>Birdie+</h1>
                <p>New</p>
              </div>
              <div className="shop_menu_1_text_rating">
                <Rating
                  width='18px'
                  height='18px'
                />
                <label>4.6/5 (308) Reviews</label>
              </div>
              <p>
                Birdie+ is a bluetooth enabled personal safety alarm. By connecting to the Birdie+ app, you can
                click a button on the device to activate these powerful features:
              </p>
              <ul>
                <li><svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00267 14.192C5.73311 14.192 3.87598 12.3351 3.87598 10.0653V7.12183C3.87598 4.85228 5.73288 2.99514 8.00267 2.99514C10.2722 2.99514 12.1294 4.85205 12.1294 7.12183V10.0653C12.1294 12.3351 10.2725 14.192 8.00267 14.192Z" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                  <path d="M2.67334 10.3364V7.13756C2.67334 4.2063 5.07182 1.80805 8.00285 1.80805C10.9341 1.80805 13.3324 4.2063 13.3324 7.13756V10.3364" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                  <path d="M1.68014 10.3364H2.6734V6.90211H1.68014C1.02074 6.90211 0.486328 7.43651 0.486328 8.09592V9.14255C0.486328 9.80195 1.02074 10.3364 1.68014 10.3364Z" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                  <path d="M3.87646 8.23759C8.26308 8.39909 9.17132 6.76491 9.80831 6.07224C10.5629 7.25588 10.8353 7.79675 12.2458 8.1216" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                  <path d="M10.2227 12.3044H8.78468C8.72299 12.3044 8.67285 12.2543 8.67285 12.1926V11.2389C8.67285 11.1772 8.72299 11.127 8.78468 11.127H10.2227C10.2844 11.127 10.3345 11.1772 10.3345 11.2389V12.1926C10.3348 12.2543 10.2846 12.3044 10.2227 12.3044Z" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                  <path d="M13.3324 6.57317V10.3568C13.3324 11.4325 12.4602 12.3047 11.3845 12.3047H9.37256" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                  <path d="M14.3199 10.3364H13.3267V6.90211H14.3199C14.9793 6.90211 15.5137 7.43651 15.5137 8.09592V9.14255C15.5137 9.80195 14.9793 10.3364 14.3199 10.3364Z" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                </svg> Instant, 24/7 Access to a live emergency Support Rep</li>
                <li><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2L10 6L14 2ZM10 6V2.66667V6ZM10 6H13.3333H10ZM3.33333 2C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V4C2 9.52267 6.47733 14 12 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V10.48C13.9999 10.3401 13.9558 10.2039 13.874 10.0904C13.7921 9.97701 13.6767 9.8922 13.544 9.848L10.5487 8.84933C10.3964 8.79873 10.2311 8.80472 10.0829 8.86619C9.93473 8.92766 9.8137 9.0405 9.742 9.184L8.98867 10.6887C7.35619 9.95096 6.04875 8.64328 5.31133 7.01067L6.816 6.25867C6.9595 6.18697 7.07234 6.06593 7.13381 5.91776C7.19528 5.76959 7.20127 5.60423 7.15067 5.452L6.152 2.45533C6.10765 2.32265 6.02269 2.20729 5.90915 2.12557C5.7956 2.04385 5.65923 1.99992 5.51933 2H3.33333Z" stroke="#2A4ACD" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>Receive Fake “Excuse-to-Leave" Calls</li>
                <li><svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 5C6 5.53043 6.21071 6.03914 6.58579 6.41421C6.96086 6.78929 7.46957 7 8 7C8.53043 7 9.03914 6.78929 9.41421 6.41421C9.78929 6.03914 10 5.53043 10 5C10 4.46957 9.78929 3.96086 9.41421 3.58579C9.03914 3.21071 8.53043 3 8 3C7.46957 3 6.96086 3.21071 6.58579 3.58579C6.21071 3.96086 6 4.46957 6 5V5Z" stroke="#2A4ACD" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M8 0.5C9.19347 0.5 10.3381 0.974106 11.182 1.81802C12.0259 2.66193 12.5 3.80653 12.5 5C12.5 7.16733 9.07867 12.018 8.20267 13.2247C8.17932 13.2565 8.14881 13.2824 8.1136 13.3002C8.07839 13.3181 8.03947 13.3274 8 13.3274C7.96053 13.3274 7.92161 13.3181 7.8864 13.3002C7.85119 13.2824 7.82068 13.2565 7.79733 13.2247C6.92133 12.018 3.5 7.16733 3.5 5C3.5 3.80653 3.97411 2.66193 4.81802 1.81802C5.66193 0.974106 6.80653 0.5 8 0.5V0.5Z" stroke="#2A4ACD" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M11.986 11.856C13.8073 12.2167 15 12.8187 15 13.5C15 14.6047 11.8667 15.5 8 15.5C4.13333 15.5 1 14.6047 1 13.5C1 12.82 2.18733 12.2193 4 11.858" stroke="#2A4ACD" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>Instantly alert emergency contacts with your exact location</li>
              </ul>
            </div>
            <div className="shop_menu_1_image">
              <img src='https://www.shesbirdie.com/s/files/1/0259/5808/8792/files/Aqua_B_1.png?v=1698088231&width=200&em-origin=cdn.shopify.com&em-format=avif' alt='product' />
            </div>
          </div>
        </div>
        : null
    }

    <div className="mobile_menu disabled">
      <div className="shop_menu mobile">
        <div className="shop_menu_1">
          <div className="shop_menu_1_text">
            <div className="shop_menu_1_text_flex">
              <h1>Birdie</h1>
              <p>Best Seller</p>
            </div>
            <div className="shop_menu_1_text_rating">
              <Rating
                width='18px'
                height='18px'
              />
              <label>4.8/5 (10,676) Reviews</label>
            </div>
            <p>
              This colorful device has a loud alarm and flashing strobe light designed to deter an
              attack.
            </p>
          </div>
          <div className="shop_menu_1_image">
            <img src='https://www.shesbirdie.com/cdn/shop/files/lavender_e1562650-7af0-4817-aeb4-044199912acc.jpg?v=1694444400&width=200&em-origin=birdie-alarm.myshopify.com&em-format=avif' alt='product' />
          </div>
        </div>
        <div className="shop_menu_1">
          <div className="shop_menu_1_text">
            <div className="shop_menu_1_text_flex">
              <h1>Birdie+</h1>
              <p>New</p>
            </div>
            <div className="shop_menu_1_text_rating">
              <Rating
                width='18px'
                height='18px'
              />
              <label>4.6/5 (308) Reviews</label>
            </div>
            <p>
              Birdie+ is a bluetooth enabled personal safety alarm. By connecting to the Birdie+ app, you can
              click a button on the device to activate these powerful features:
            </p>
            <ul>
              <li><svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00267 14.192C5.73311 14.192 3.87598 12.3351 3.87598 10.0653V7.12183C3.87598 4.85228 5.73288 2.99514 8.00267 2.99514C10.2722 2.99514 12.1294 4.85205 12.1294 7.12183V10.0653C12.1294 12.3351 10.2725 14.192 8.00267 14.192Z" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                <path d="M2.67334 10.3364V7.13756C2.67334 4.2063 5.07182 1.80805 8.00285 1.80805C10.9341 1.80805 13.3324 4.2063 13.3324 7.13756V10.3364" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                <path d="M1.68014 10.3364H2.6734V6.90211H1.68014C1.02074 6.90211 0.486328 7.43651 0.486328 8.09592V9.14255C0.486328 9.80195 1.02074 10.3364 1.68014 10.3364Z" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                <path d="M3.87646 8.23759C8.26308 8.39909 9.17132 6.76491 9.80831 6.07224C10.5629 7.25588 10.8353 7.79675 12.2458 8.1216" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                <path d="M10.2227 12.3044H8.78468C8.72299 12.3044 8.67285 12.2543 8.67285 12.1926V11.2389C8.67285 11.1772 8.72299 11.127 8.78468 11.127H10.2227C10.2844 11.127 10.3345 11.1772 10.3345 11.2389V12.1926C10.3348 12.2543 10.2846 12.3044 10.2227 12.3044Z" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                <path d="M13.3324 6.57317V10.3568C13.3324 11.4325 12.4602 12.3047 11.3845 12.3047H9.37256" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
                <path d="M14.3199 10.3364H13.3267V6.90211H14.3199C14.9793 6.90211 15.5137 7.43651 15.5137 8.09592V9.14255C15.5137 9.80195 14.9793 10.3364 14.3199 10.3364Z" stroke="#2A4ACD" stroke-width="0.8" stroke-miterlimit="10"></path>
              </svg> Instant, 24/7 Access to a live emergency Support Rep</li>
              <li><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L10 6L14 2ZM10 6V2.66667V6ZM10 6H13.3333H10ZM3.33333 2C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V4C2 9.52267 6.47733 14 12 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V10.48C13.9999 10.3401 13.9558 10.2039 13.874 10.0904C13.7921 9.97701 13.6767 9.8922 13.544 9.848L10.5487 8.84933C10.3964 8.79873 10.2311 8.80472 10.0829 8.86619C9.93473 8.92766 9.8137 9.0405 9.742 9.184L8.98867 10.6887C7.35619 9.95096 6.04875 8.64328 5.31133 7.01067L6.816 6.25867C6.9595 6.18697 7.07234 6.06593 7.13381 5.91776C7.19528 5.76959 7.20127 5.60423 7.15067 5.452L6.152 2.45533C6.10765 2.32265 6.02269 2.20729 5.90915 2.12557C5.7956 2.04385 5.65923 1.99992 5.51933 2H3.33333Z" stroke="#2A4ACD" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>Receive Fake “Excuse-to-Leave" Calls</li>
              <li><svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 5C6 5.53043 6.21071 6.03914 6.58579 6.41421C6.96086 6.78929 7.46957 7 8 7C8.53043 7 9.03914 6.78929 9.41421 6.41421C9.78929 6.03914 10 5.53043 10 5C10 4.46957 9.78929 3.96086 9.41421 3.58579C9.03914 3.21071 8.53043 3 8 3C7.46957 3 6.96086 3.21071 6.58579 3.58579C6.21071 3.96086 6 4.46957 6 5V5Z" stroke="#2A4ACD" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8 0.5C9.19347 0.5 10.3381 0.974106 11.182 1.81802C12.0259 2.66193 12.5 3.80653 12.5 5C12.5 7.16733 9.07867 12.018 8.20267 13.2247C8.17932 13.2565 8.14881 13.2824 8.1136 13.3002C8.07839 13.3181 8.03947 13.3274 8 13.3274C7.96053 13.3274 7.92161 13.3181 7.8864 13.3002C7.85119 13.2824 7.82068 13.2565 7.79733 13.2247C6.92133 12.018 3.5 7.16733 3.5 5C3.5 3.80653 3.97411 2.66193 4.81802 1.81802C5.66193 0.974106 6.80653 0.5 8 0.5V0.5Z" stroke="#2A4ACD" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11.986 11.856C13.8073 12.2167 15 12.8187 15 13.5C15 14.6047 11.8667 15.5 8 15.5C4.13333 15.5 1 14.6047 1 13.5C1 12.82 2.18733 12.2193 4 11.858" stroke="#2A4ACD" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>Instantly alert emergency contacts with your exact location</li>
            </ul>
          </div>
          <div className="shop_menu_1_image">
            <img src='https://www.shesbirdie.com/s/files/1/0259/5808/8792/files/Aqua_B_1.png?v=1698088231&width=200&em-origin=cdn.shopify.com&em-format=avif' alt='product' />
          </div>
        </div>
      </div>
      <div className="menu mobile">
        <ul>
          <li><a href='#'>Shop</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Bulk Orders</a></li>
          <li><a href='#'>How It Works</a></li>
        </ul>
      </div>
    </div>
  </>)
}
