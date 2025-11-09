import { useContext } from "react";
import cartContext from "../context/cartContext";

function CartContainer() {
    const { cart, removeItem, clearCart } = useContext(cartContext);

    return (
        <section style={{ textAlign: "center", padding: "20px" }}>
            <h1>Tu carrito de compras</h1>

            {cart.length === 0 ? (
                <p>Tu carrito está vacío 🛒</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                backgroundColor: "#111",
                                color: "white",
                                margin: "10px auto",
                                padding: "10px",
                                borderRadius: "8px",
                                width: "300px",
                            }}
                        >
                            <h3>{item.title}</h3>
                            <img width="150" src={item.img} alt={item.title} />
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Total: ${item.price * item.quantity}</p>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <button onClick={clearCart} style={{ marginTop: "20px" }}>
                        Vaciar carrito
                    </button>
                </>
            )}
        </section>
    );
}

export default CartContainer;
