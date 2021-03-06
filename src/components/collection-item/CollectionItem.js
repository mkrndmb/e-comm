import React from 'react'
import './collection-item.css';
import CustomButton from '../custom-button/CustomButton' 
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart-action' 

const CollectionItem = ({ item,addItem }) => {
    const {imageUrl,name,price} = item
  
  return ( 
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={()=>addItem(item)} inverted> ADD TO CART </CustomButton>
    </div>
  )};

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)