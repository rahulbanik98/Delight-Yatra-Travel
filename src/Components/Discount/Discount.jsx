import React, { useEffect } from 'react'
import './Discount.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import video from '../Assets/video.mp4';

function Discount() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='discount section'>
      <div className="secContainer">
        <video src={video} autoPlay loop muted typeof='mp4'></video>
        <div className="textDiv">
          <span data-aos='fade-up' data-aos-duration='2000' className="title">
            Contact and get special discount %
          </span>
          <p data-aos='fade-up' data-aos-duration='2500'>
            Want to get an instant discount for your next tour to any of your favourite destination
          </p>

          <div data-aos='fade-up' data-aos-duration='3000' className="input_btn flex">
            <input type="text" placeholder='Enter your email' />
            <button className='btn'>Connect Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount