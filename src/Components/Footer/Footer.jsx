import React, { useEffect } from 'react';
import './Footer.css';
import { HiPhone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { BrowserRouter, Link } from 'react-router-dom';

function Footer() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='footer'>
      <div className="secContainer container">
        <div className="content grid">
          <div data-aos='fade-up' data-aos-duration='4000' className="row">
            <div className="spanText">
              Contact Us
            </div>

            <div className="contactDiv">
              <span className="flex">
                <HiPhone className='icon' />
                <span>+91 6289108505</span>
              </span>

              <span className="flex">
                <MdEmail className='icon' />
                <span>delightyatratravel@gmail.com</span>
              </span>

              <span className="flex">
                <BrowserRouter>
                  <Link to='https://goo.gl/maps/XehvUgriVKvTcbu5A' target='_blank'>
                    <FaLocationArrow className='icon' />
                    <span>Tiasha Apartment, 492C, Motilal Gupta Rd, Sodepur Kalitala, Sukanta Pally, Kolkata, West Bengal 700082</span>
                  </Link>
                </BrowserRouter>
              </span>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='4000' className="row">
            <div className="spanText">
              Popular News
            </div>

            <div className="singleNews">
              <span className="text">
                Your Peosonal Guide to the most places to visit in the world
              </span>
              <p>
                Jan 04, 2023
              </p>
            </div>

            <div className="singleNews">
              <span className="text">
                The grand reveal of the most iconic hotel in the world - Atlantis The Royal
              </span>
              <p>
                Jan 04, 2023
              </p>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='4000' className="row">
            <div className="spanText">
              Quick Link
            </div>
            <div className="footerLinks">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottomDiv flex">
          <p>Copyright 2023 Rahul banik - All rights reserved</p>

          <div className="social flex">
            <BrowserRouter>
              <Link to='https://www.facebook.com/profile.php?id=61550502430785&mibextid=ZbWKwL' target='_blank'>
                <FaFacebookF className='icon' />
              </Link>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <Link to='https://www.instagram.com/delight_yatra_travel/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'>
                <AiFillInstagram className='icon' />
              </Link>
            </BrowserRouter>
          </div>

          <p>Privacy Policy V.1.0.1</p>
        </div>
      </div>
    </div>
  )
}

export default Footer