//for memoization : we dont want compo. to re render if their state is not changing 
import {createSelector} from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=> cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce((acc,cartItem)=> acc + cartItem.quantity ,0)
)