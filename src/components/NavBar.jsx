import { Link } from "react-router";
import CartWidget from "./CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img
                    src="/images/1-909517c9.png"
                    alt="Taurus Tec Logo"
                />
            </Link>

            <div className="navbar-links">
                <Link to="/category/xiaomi">Xiaomi</Link>
                <Link to="/category/samsung">Samsung</Link>
                <Link to="/category/iphone">iPhone</Link>
                <Link to="/category/honor">Honor</Link>
            </div>

            <CartWidget />
        </nav>
    );
}

export default Navbar;
