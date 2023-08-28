import React, { useEffect } from 'react'
import user4 from '../Assets/user(4).jpg'
import './Staff.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Staff() {
  
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  return (
    <div className='staff contain section'>
      <div className="secContainer">
        <span className="secTitle">
          Different People - One Mission
        </span>

        <div className="staffContainer grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user4} />
            </div>

            <span className='name'>
              Nicle Charmaine
            </span>

            <span className='jobTitle'>
              CEO Wander
            </span>
            
            <span className='contact'>
              +91 1234567890
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user4} />
            </div>

            <span className='name'>
              Nicle Charmaine
            </span>

            <span className='jobTitle'>
              CTO
            </span>
            
            <span className='contact'>
              +91 1234567890
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user4} />
            </div>

            <span className='name'>
              Nicle Charmaine
            </span>

            <span className='jobTitle'>
              CEO Wander
            </span>
            
            <span className='contact'>
              +91 1234567890
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Staff