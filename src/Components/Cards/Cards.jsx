import React, { useEffect } from 'react'
import './Cards.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import cardImage1 from '../Assets/cardImage1.jpg'
import cardImage2 from '../Assets/cardImage2.jpg'
import cardImage3 from '../Assets/cardImage3.jpg'

import {AiOutlineSwapRight} from 'react-icons/ai'


function Cards() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='cards'>
      <div data-aos='fade-up' data-aos-duration='2000' className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage1} />
          </div>
          <h4 className="textDiv">
            Ballon Flight
          </h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage2} />
          </div>
          <h4 className="textDiv">
            Beach Travel
          </h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage3} />
          </div>
          <h4 className="textDiv">
            Mountain Tours
          </h4>
        </div>
      </div>

      <div className="spanText flex">
        Other Tours <AiOutlineSwapRight className='icon'/>
      </div>
    </div>
  )
}

export default Cards