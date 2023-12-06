import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";

import "./App.css";

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<h1>Page Not Found</h1>} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;
