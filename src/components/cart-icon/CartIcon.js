import React from 'react'
import './cart-icon.css'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-action'

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
            CART~ 
                <span className='cart-count'>0</span>
            
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)