import CartWidget from "./CartWidget";
import { Link } from "react-router"; 

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                padding: "10px",
                backgroundColor: "#000",
            }}
        >
            <Link to="/" style={{ textDecoration: "none" }}>
                <img
                    src="/public/images/1-909517c9.png" 
                    alt="Taurus Tec Logo"
                    style={{
                        width: "120px",
                        height: "auto",
                        filter: "drop-shadow(0 0 6px #0af)",
                    }}
                />
            </Link>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    padding: "10px",
                    border: "1px solid gray",
                    backgroundColor: "black",
                    width: "100%",
                    maxWidth: "600px",
                }}
            >
                <Link to="/category/xiaomi" style={{ color: "white", textDecoration: "none" }}>Xiaomi</Link>
                <Link to="/category/samsung" style={{ color: "white", textDecoration: "none" }}>Samsung</Link>
                <Link to="/category/iphone" style={{ color: "white", textDecoration: "none" }}>iPhone</Link>
                <Link to="/category/honor" style={{ color: "white", textDecoration: "none" }}>Honor</Link>
                <Link to="/detail" style={{ color: "white", textDecoration: "none" }}>Detalle</Link>
            </div>

            {/* Carrito */}
            <CartWidget />
        </nav>
    );
}

export default Navbar;
