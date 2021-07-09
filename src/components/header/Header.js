import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils.js'
import './header.css'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon.js'
import CartDropdown from '../cart-dropdown/CartDropdown'



const Header = ({currentUser,hidden}) => (
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
        <CartIcon/>
      </div>
        {
        hidden ? null : <CartDropdown/> }
    </div>
  );

const mapStateToProps = ({user : {currentUser},cart : {hidden}}) => ({
      // currentUser : state.user.currentUser
      currentUser,
      hidden
})
  

export default connect(mapStateToProps)(Header)