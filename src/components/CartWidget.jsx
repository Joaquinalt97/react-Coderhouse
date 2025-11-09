import { useContext } from "react";
import CartContext from "../context/cartContext";
import { Link } from "react-router";

function CartWidget() {
    const { countItems } = useContext(CartContext);

    return (
        <div>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
                🛒 {countItems()}
            </Link>
        </div>
    );
}

export default CartWidget;