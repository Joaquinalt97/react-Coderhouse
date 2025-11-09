import { useState, useContext, useEffect } from "react";
import cartContext from "../context/cartContext";

function ItemCount({ product }) {
    const [count, setCount] = useState(1);
    const [limit, setLimit] = useState(false);
    const [added, setAdded] = useState(false);

    const { addItem } = useContext(cartContext);
    const maxValue = product?.stock ?? 10;

    useEffect(() => {
        if (limit) console.log("Se alcanzó el límite del stock.");
    }, [limit]);

    function sumar() {
        if (count < maxValue) {
            setCount(count + 1);
            setLimit(false);
        } else {
            setLimit(true);
        }
    }

    function restar() {
        if (count > 1) setCount(count - 1);
    }

    function addToCart() {
        addItem({ ...product, quantity: count });
        setAdded(true);
        setCount(1);

        // mensaje temporal de confirmación
        setTimeout(() => setAdded(false), 2000);
    }

    return (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>

            {limit && <p style={{ color: "red" }}>Alcanzaste el máximo de stock</p>}
            {added && <p style={{ color: "lime" }}>Producto agregado ✅</p>}

            <button onClick={addToCart} style={{ marginTop: "10px" }}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;