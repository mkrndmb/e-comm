import React from 'react'
import './cart-icon.css'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-action'
import {selectCartItemsCount} from '../../redux/cart/cart-selector'

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
            CART~ <span className='cart-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = (state)=>({
    //prev. argument : {cart:{cartItems}}
    //console.log('hiiiiiiiii....')
    itemCount : selectCartItemsCount(state)
    //cartItems.reduce((acc,cartItem)=> acc + cartItem.quantity ,0)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)