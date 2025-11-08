//* 3: consumir el context
import { useContext,  } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router";

function CartWidget () {
    const { countItemsInCart } = useContext(cartContext);

    return (<div>
        <link to="/cart">
        { countItemsInCart()}
        </link>
    </div>)
}

export default CartWidget;