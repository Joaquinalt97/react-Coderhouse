import { useState, useContext, useEffect } from "react";
import cartContext from "../context/cartContext";

function ItemCount({ product }) {
    const [count, setCount] = useState(1);
    const [limit, setLimit] = useState(false)
    const maxValue = 10;

    const { addItem } = useContext(cartContext);

    useEffect(() => {
        console.log("consultando bases de datos...");
    }, [limit]);

    function sumar() {
        if (count < maxValue) { setCount(count + 1); }
        else {
            setLimit(true)
        }
    }

    function restar() {
        if (count > 1) { setCount(count - 1) }
    }

    function addToCart() {
        addItem({ ...product, quantity: count });
    }

    return (
        <div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center"}} id="counter-button">
            <button onClick={ restar }>-</button>
            <p> { count } </p>
            <button onClick={ sumar }>+</button>
            </div>
            {
                limit ? <p>Alcanzaste el maximo de productos </p> : <></>
            }
            <button onClick={addToCart}>Agregar</button>
        </div>
    );
}

export default ItemCount;