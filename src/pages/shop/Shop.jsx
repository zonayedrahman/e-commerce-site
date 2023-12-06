import { PRODUCTS } from "../../helpers/Products";
import ShopItem from "./ShopItem";

import "../../styles/Shop.css";

function Shop() {
    return (
        <div className="Shop">
            <div className="Shop-title">
                <h1>Shop</h1>
            </div>
            <div className="Shop-items">
                {PRODUCTS.map((product) => {
                    return <ShopItem key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
}

export default Shop;
