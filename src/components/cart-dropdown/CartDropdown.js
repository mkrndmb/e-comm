import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.css'
import CartItem from '../cart-item/CartItem'
import {connect} from 'react-redux'

const Cart = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
            <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps)(Cart)