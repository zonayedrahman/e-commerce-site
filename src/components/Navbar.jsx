import { Link } from "react-router-dom";
import { FunnelSimple, Grains, ListDashes } from "@phosphor-icons/react";
import { useState } from "react";

import "../styles/Navbar.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="Navbar" id={showMenu ? `show` : `hide`}>
            <div className="Navbar-wide">
                <div className="logo">
                    <Grains size={75} />
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/shop" className="nav-link">
                        Shop
                    </Link>
                    <Link to="/cart" className="nav-link">
                        Cart
                    </Link>
                </div>
            </div>
            <div className="Navbar-toggle">
                <div className="nav-toggle-logo">
                    <Grains size={75} />
                </div>
                <div className="nav-toggle-menu">
                    <button onClick={() => setShowMenu((prev) => !prev)}>
                        <ListDashes size={35} />
                    </button>
                </div>
                <div className="nav-toggle-links">
                    <Link to="/" className="nav-toggle-link">
                        Home
                    </Link>
                    <Link to="/shop" className="nav-toggle-link">
                        Shop
                    </Link>
                    <Link to="/cart" className="nav-toggle-link">
                        Cart
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
