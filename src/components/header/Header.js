import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils.js'
import './header.css'


const Header = ({currentUser}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        HOME
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        {currentUser ? <div className='option' onClick={()=>auth.signOut()}>
          SIGNOUT
        </div> : <Link className='option' to='/signin'>
          SIGNIN
        </Link>}
      </div>
    </div>
  );

export default Header