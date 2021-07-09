import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.css'

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    </div>
)

export default Cart