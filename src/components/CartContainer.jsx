import { useContext } from "react";
import cartContext from "../context/CartContext";
import { createBuyOrder } from "../data/FirestoreService";
import "./CartContainer.css"
import CheckoutForm from "./CheckoutForm";

function CartContainer() {
    const { cart, removeItem, clearCart } = useContext(cartContext);

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    async function handleCheckout(data) {
        const orderData = {
            buyer: data,
            cart,
            total: total,
            date: new Date(),
        };

        if (orderData) {
            const Response = await createBuyOrder(orderData);

            alert(`Gracias por tu compra! 🎉\nID de tu pedido: ${Response.id}`);

            clearCart();
        } else {
            alert("Hubo un error al procesar tu compra.");
        }
    }

    return (
        <section style={{ textAlign: "center", padding: "20px" }}>
            <h1>Tu carrito de compras</h1>

            {cart.length === 0 ? (
                <p>Tu carrito está vacío 🛒</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                backgroundColor: "color: white",
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

                            <button onClick={() => removeItem(item.id)}>
                                Eliminar
                            </button>
                        </div>
                    ))}

                    <h2>Total de tu compra: ${total}</h2>
                    <CheckoutForm handleCheckout={handleCheckout}/>
                </div>
            )}
        </section>
    );
}

export default CartContainer;
