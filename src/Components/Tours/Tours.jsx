import React, { useEffect } from 'react'
import './Tours.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { AiFillStar } from 'react-icons/ai'
import sikkim from '../Assets/sikkim.jpg';
import andamanandnicobar from '../Assets/andaman-and-nicobar.jpg';
import HimachalPradesh from '../Assets/Himachal-Pradesh.jpg';
import Kerala from '../Assets/Kerala.jpg';
import KarnatakaTamilnadu from '../Assets/Karnataka-Tamilnadu.jpg';
import Uttarakhand from '../Assets/Uttarakhand.jpg';
import Nepal from '../Assets/Nepal.jpg';
import Rajasthan from '../Assets/Rajasthan.jpg';
import Goa from '../Assets/Goa.jpg';
import JammKashmir from '../Assets/Jammu-Kashmir.jpg';
import ArunachalPradesh from '../Assets/ArunachalPradesh.jpg';

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
              <img src={sikkim} alt='sikkim'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Sikkim
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
              <img src={andamanandnicobar} alt='Andaman'/>
            </div>
            <div data-aos='fade-up' data-aos-duration='3500' className="tourInfo">
              <span className="tourTitle">
                Andaman and Nicobar
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

          <div data-aos='fade-up' data-aos-duration='4000' className="singleTour grid">
            <div className="imgDiv">
              <img src={HimachalPradesh} alt='Himachal'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Himachal Pradesh
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

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={Kerala} alt='Kerala'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Kerala
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

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={KarnatakaTamilnadu} alt='Karnataka'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Karnataka & Tamilnadu
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

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={Uttarakhand} alt='Uttarakhand'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Uttarakhand
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

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={Nepal} alt='Nepal'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Nepal
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

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={Rajasthan} alt='Rajasthan'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Rajasthan
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

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={JammKashmir} alt='Jammu'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Jammu & Kashmir
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

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={Goa} alt='Goa'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Goa
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
              <img src={ArunachalPradesh} alt='Arunachal'/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Arunachal Pradesh
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