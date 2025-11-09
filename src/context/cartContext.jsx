import { createContext, useState } from 'react';

const CartContext = createContext({ cart: [] });

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Agregar producto al carrito
    function addItem(item) {
        const existingItem = cartItems.find((prod) => prod.id === item.id);

        if (existingItem) {
            // Si ya existe, actualizamos cantidad
            const updatedCart = cartItems.map((prod) =>
                prod.id === item.id
                    ? { ...prod, quantity: prod.quantity + item.quantity }
                    : prod
            );
            setCartItems(updatedCart);
        } else {
            // Si no existe, lo agregamos
            setCartItems([...cartItems, item]);
        }
    }

    // Eliminar producto por ID
    function removeItem(id) {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    }

    // Vaciar carrito
    function clearCart() {
        setCartItems([]);
    }

    // Contar total de unidades
    function countItems() {
        return cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    }

    return (
        <CartContext.Provider value={{ cart: cartItems, addItem, removeItem, clearCart, countItems }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
