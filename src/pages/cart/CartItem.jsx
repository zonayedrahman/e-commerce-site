import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartItem({ product, amount }) {
    const { addToCart, removeFromCart } = useContext(ShopContext);
    return (
        <div className="CartItem">
            <div className="CartItem-img">
                <img src={product.productImage} alt={product.productName} />
            </div>
            <div className="CartItem-details">
                <div className="CartItem-name">{product.productName}</div>
                <div className="CartItem-price">${product.price}</div>
                <div className="CartItem-button">
                    <button
                        className="add"
                        onClick={() => addToCart(product.id)}
                    >
                        +
                    </button>
                    <div>{amount}</div>
                    <button
                        className="subtract"
                        onClick={() => removeFromCart(product.id)}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
