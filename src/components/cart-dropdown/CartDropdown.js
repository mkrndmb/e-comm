import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.css'
import CartItem from '../cart-item/CartItem'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart-selector'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart-action'

const Cart = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   
                cartItems.length 
                ?
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <span className='empty-message'>Your cart is Empty !!!</span> 
            }
        </div>
            <CustomButton onClick={()=>{history.push('/checkout'); dispatch(toggleCartHidden())}}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) =>({
    //prev. argument : {cart:{cartItems}}
    cartItems:selectCartItems(state)
    //cartItems
})

export default withRouter(connect(mapStateToProps)(Cart))