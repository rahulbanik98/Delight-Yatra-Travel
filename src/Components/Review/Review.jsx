import React, { useEffect } from 'react';
import './Reviwe.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
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
              <img src={user1} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos animi pariatur saepe! Explicabo error, iste omnis facere aspernatur, laborum maiores culpa magnam repellendus eius aperiam totam, vero asperiores nobis!
            </p>

            <div className="name">
              Test Name
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='5500' className="singleReview">
            <div className="imgDiv">
              <img src={user1} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos animi pariatur saepe! Explicabo error, iste omnis facere aspernatur, laborum maiores culpa magnam repellendus eius aperiam totam, vero asperiores nobis!
            </p>

            <div className="name">
              Test Name
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='6000' className="singleReview">
            <div className="imgDiv">
              <img src={user1} />
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