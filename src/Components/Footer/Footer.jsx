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
                <span>+91 1234567890</span>
              </span>

              <span className="flex">
                <MdEmail className='icon' />
                <span>test@gmail.com</span>
              </span>

              <span className="flex">
                <FaLocationArrow className='icon' />
                <span>+91 1234567890</span>
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
            <FaFacebookF className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>

          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer