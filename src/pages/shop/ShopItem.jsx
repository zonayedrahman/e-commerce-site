import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function ShopItem({ product }) {
    const { cartItems, addToCart } = useContext(ShopContext);

    const amount = cartItems[product.id];
    return (
        <div className="ShopItem">
            <div className="ShopItem-image">
                <img src={product.productImage} alt={product.productName} />
            </div>
            <div className="ShopItem-details">
                <div className="ShopItem-name">{product.productName}</div>
                <div className="ShopItem-price">${product.price}</div>
            </div>
            <div className="ShopItem-button">
                <button onClick={() => addToCart(product.id)}>
                    Add to Cart {amount > 0 && <>({amount})</>}
                </button>
            </div>
        </div>
    );
}

export default ShopItem;
