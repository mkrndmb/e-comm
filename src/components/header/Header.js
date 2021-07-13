import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils.js'
import './header.css'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon.js'
import CartDropdown from '../cart-dropdown/CartDropdown'
import {selectCartHidden} from '../../redux/cart/cart-selector'
import {selectCurrentUser} from '../../redux/user/user-selector'
import {createStructuredSelector} from 'reselect'

const Header = ({currentUser,hidden}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        HOME
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        { currentUser ? <div className='option' onClick={()=>auth.signOut()}>
          SIGNOUT
        </div> : <Link className='option' to='/signin'>
          SIGNIN
        </Link>}  
        <CartIcon/>
      </div>
        {  hidden ? null : <CartDropdown/> }
    </div>
  );

// const mapStateToProps = (state) => ({
//  commented //prev. arg : {user : {currentUser},cart : {hidden}}    
//  commented // currentUser : state.user.currentUser
//       currentUser: selectCurrentUser(state),
//       hidden : selectCartHidden(state)
// })
  //OR
  const mapStateToProps =  createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden : selectCartHidden
  })

export default connect(mapStateToProps)(Header)