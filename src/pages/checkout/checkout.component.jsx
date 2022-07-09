import { React } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-blocks">
                <span>Product</span>
            </div>
            <div className="header-blocks">
                <span>Description</span>
            </div>
            <div className="header-blocks">
                <span>Quantity</span>
            </div>
            <div className="header-blocks">
                <span>Price</span>
            </div>
            <div className="header-blocks">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map ( cartItem => (
                <CheckoutItem cartItem={cartItem} key = {cartItem.id}/>
            ) )
        }

        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

//Other method to pass mapStateToProps in selectors
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state),
//     total: selectCartTotal(state)
// })

//New and short method to use selectors
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);