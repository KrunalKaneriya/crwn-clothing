import React from 'react';
import {connect} from "react-redux"
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
            {
                cartItems.length ? 
                cartItems.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem}/>)
                : 
                <span className="empty-message">Your cart is empty</span>
            }

        <CustomButton onClick = {() => 
        {
            history.push("/checkout")
            dispatch(toggleCartHidden());
        }
        }> Go To Checkout </CustomButton>
    </div>
)

const mapStateToProps = ( state ) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));