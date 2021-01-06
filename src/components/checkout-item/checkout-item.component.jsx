import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { withRouter } from 'react-router-dom';

// import CustomButton from '../custom-button/custom-button.component';
// import CartItem from '../cart-item/cart-item.component';
import { clearItemFromCart } from '../../redux/cart/cart.actions'
// import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div>

        </div>
    )
};

const mdtp = dispatch => ({
    clearItem: item=> dispatch(clearItemFromCart(item))
})
export default connect(null, mdtp)(CheckoutItem);
