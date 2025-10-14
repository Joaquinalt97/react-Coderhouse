// este componente nos va a permitir seleccionar una cantidad de item
import { useState } from "react";

function ItemCount () {
    // let count = 1;
    const [count, setCount] = useState (1)
    const maxValue = 10;


    function sumar(){
        if (count < maxValue)
        {setCount ( count +1)}
    }

    function restar(){
        if (count > 0)
        {setCount ( count -1)}
    }

    return (
        <div>
            <button onClick={restar} >-</button>
            <p>{ count }</p>
            <button onClick={sumar}>+</button>
        </div>
    )
} 
export default ItemCount