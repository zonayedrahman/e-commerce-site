import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../helpers/Products";
import CartItem from "./CartItem";
import { PaypalLogo } from "@phosphor-icons/react";

import "../../styles/Cart.css";

function Cart() {
    const { cartItems } = useContext(ShopContext);

    let total = PRODUCTS.reduce((total, product) => {
        return total + product.price * cartItems[product.id];
    }, 0);
    return (
        <div className="Cart">
            <div className="Cart-title">
                <h1>Cart</h1>
            </div>
            <div className="Cart-details">
                <div className="Cart-items">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] > 0) {
                            return (
                                <CartItem
                                    key={product.id}
                                    product={product}
                                    amount={cartItems[product.id]}
                                />
                            );
                        }
                    })}
                </div>
                <div className="Cart-total">
                    <h2 className="Cart-total-title">Total</h2>
                    <h2>${total}</h2>
                    <div className="Purchase-buttons">
                        <button className="Purchase">Purchase</button>
                        <button className="Purchase-paypal">
                            Pay With <PaypalLogo size={32} />
                            Paypal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
