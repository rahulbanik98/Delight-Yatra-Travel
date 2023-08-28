import React, { useEffect } from 'react'
import './Tours.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { AiFillStar } from 'react-icons/ai'
import tourImage1 from '../Assets/image2.jpg';
import tourImage2 from '../Assets/image3.jpg';

function Tours() {

    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])
  
  return (
    <div className='tours container section'>
      <div className="secContainer">
        <span className="secTitle">
          Hot Tours
        </span>

        <div className="tourContainer">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1} />
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Spain, Benidorn
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                </div>
                <small className='custReview'>
                  2 Customer review
                </small>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non recusandae dolor doloribus fugiat deserunt eveniet necessitatibus magnam nobis itaque, officia iste ratione, porro provident ipsam ut quis quos voluptatem!
              </p>
              <button className='btn'>Buy This Tour</button>
            </div>
            <span className="price">
              $750
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='3000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage2} />
            </div>
            <div data-aos='fade-up' data-aos-duration='3500' className="tourInfo">
              <span className="tourTitle">
                Spain, Benidorn
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                </div>
                <small className='custReview'>
                  2 Customer review
                </small>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non recusandae dolor doloribus fugiat deserunt eveniet necessitatibus magnam nobis itaque, officia iste ratione, porro provident ipsam ut quis quos voluptatem!
              </p>
              <button className='btn'>Buy This Tour</button>
            </div>
            <span className="price">
              $750
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours