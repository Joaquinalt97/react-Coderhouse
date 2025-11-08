import { createContext, useState } from 'react';
const cartContext = createContext({ cart: [] });

export function CartContextProvider(props){
    const [cartItems, setCartItems] = useState ([1, 2, 3])

    function addItem(item) {
        const newCartItems = structuredClone(cartItems)
        newCartItems.push(item)
        setCartItems(newCartItems)
    }

    function removeItem () {
        /* eliminar el producto con ese id de context */
    }

    function clearCart(){
        /*vaciar carrito de compras*/
    }

    function countItems (){
        let totalItems = 0 ;
        cartItems.forEach ((item) => totalItems += item.quantity)
        return totalItems;
    }

    return (
        <cartContext.Provider value={{ cart: cartItems, addItem, removeItem, clearCart, countItems }}>
            { props.children }
        </cartContext.Provider>
    )
}

export default cartContext;