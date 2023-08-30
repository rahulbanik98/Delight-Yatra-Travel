import React, { useEffect } from 'react';
import './Reviwe.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import SanjanaSharma from '../Assets/SanjanaSharma.jpg';
import SudiptaBanerjee from '../Assets/SudiptaBanerjee .jpg';
import user1 from '../Assets/user (1).jpg';


function Review() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='review section'>
      <div className="secContainer">
        <span className="secTitle">
          What People Say
        </span>

        <div className="reviewContainer container grid">
          <div data-aos='fade-up' data-aos-duration='5000' className="singleReview">
            <div className="imgDiv">
              <img src={SanjanaSharma} alt='Sanjana Sharma'/>
            </div>
            <p>
              The trip I had for Darjeeling was great & well organised. The itinerary was very comforting & duly followed.  I will definitely recommend them to others, thanks again!
            </p>

            <div className="name">
            Sanjana Sharma
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='5500' className="singleReview">
            <div className="imgDiv">
              <img src={SudiptaBanerjee} alt='Sudipta Banerjee'/>
            </div>
            <p>
            The trip I had for Darjeeling was great & well organised. The itinerary was very comforting & duly followed.  I will definitely recommend them to others, thanks again!
            </p>

            <div className="name">
            Sudipta Banerjee
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='6000' className="singleReview">
            <div className="imgDiv">
              <img src={user1} alt='Test Name'/>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos animi pariatur saepe! Explicabo error, iste omnis facere aspernatur, laborum maiores culpa magnam repellendus eius aperiam totam, vero asperiores nobis!
            </p>

            <div className="name">
              Test Name
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Review