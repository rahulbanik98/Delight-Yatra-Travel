import React, { useState } from 'react'
import './Navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { BrowserRouter, Link } from 'react-router-dom';

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
                <div className='logoDiv'>
                    <h3 className='logo'>Delight Yatra Travel</h3>
                </div>

                <div className={active}>
                    <BrowserRouter>
                        <ul className='menuLists'>
                            <li className='navItem'>
                                <Link onClick={removeNavBar} className='menuLink'>Home</Link>
                            </li>
                            <li className='navItem'>
                                <Link onClick={removeNavBar} className='menuLink'>About</Link>
                            </li>
                            <li className='navItem'>
                                <Link onClick={removeNavBar} className='menuLink'>Our Tours</Link>
                            </li>
                            <li className='navItem'>
                                <Link onClick={removeNavBar} className='menuLink'>Gallery</Link>
                            </li>
                            <li className='navItem'>
                                <Link onClick={removeNavBar} className='menuLink'>Blog</Link>
                            </li>
                            <li className='navItem'>
                                <Link onClick={removeNavBar} className='menuLink'>Contact Us</Link>
                            </li>
                            <li className='navItem'>
                                <Link onClick={removeNavBar} className='menuLink'>Pages</Link>
                            </li>
                        </ul>
                    </BrowserRouter>
                    <div onClick={removeNavBar} className='closeNavbar'>
                        <AiFillCloseCircle className='icon' />
                    </div>

                </div>

                <div className="socialIcons flex">
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