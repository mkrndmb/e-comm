import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'


const Header = () => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        HOME
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
      </div>
    </div>
  );

export default Header