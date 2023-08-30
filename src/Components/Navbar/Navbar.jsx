import React, { useState } from 'react'
import './Navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { BrowserRouter, Link } from 'react-router-dom';
// import delight from '../Assets/delight.png'

function Navbar() {
    const [active, setActive] = useState('menuDiv')

    const showNavBar = () => {
        setActive((current) => (current = 'menuDiv activeNavbar'))
    }

    const removeNavBar = () => {
        setActive((current) => (current = 'menuDiv'))
    }
    return (
        <div>
            <div className='header flex'>
                {/* <div style={{height: '1px'}}>
                    <img src={delight} />
                </div> */}

                <div className='logoDiv'>
                    <h3 className='logo'>Delight Yatra Travel</h3>
                </div>

                <div className={active}>
                    <ul className='menuLists'>
                        <li className='navItem'>
                            <a href="#" onClick={removeNavBar} className='menuLink'>Home</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" onClick={removeNavBar} className='menuLink'>About</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" onClick={removeNavBar} className='menuLink'>Our Tours</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" onClick={removeNavBar} className='menuLink'>Gallery</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" onClick={removeNavBar} className='menuLink'>Blog</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" onClick={removeNavBar} className='menuLink'>Contact Us</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" onClick={removeNavBar} className='menuLink'>Pages</a>
                        </li>
                    </ul>

                    <div onClick={removeNavBar} className='closeNavbar'>
                        <AiFillCloseCircle className='icon' />
                    </div>

                </div>

                <div className="socialIcons flex">
                    {/* <Link to='https://www.facebook.com/profile.php?id=61550502430785&mibextid=ZbWKwL'>Hello</Link> */}
                    <BrowserRouter>
                        <Link to='https://www.facebook.com/profile.php?id=61550502430785&mibextid=ZbWKwL' target='_blank'>
                            <BsFacebook className='icon' />
                        </Link>
                        <AiOutlineTwitter className='icon' />
                        <AiFillYoutube className='icon' />
                        <Link to='https://www.instagram.com/delight_yatra_travel/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'>
                            <AiFillInstagram className='icon' />
                        </Link>
                    </BrowserRouter>
                </div>

                <div onClick={showNavBar} className="toggleNavbar">
                    <TbGridDots className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar