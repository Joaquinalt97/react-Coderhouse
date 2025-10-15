import Item from "./Item"

import getData from "../data/data"
import { useState, useEffect } from "react"

function ItemListContainer(props) {
    const [products, setProducts] = useState ([]);
    useEffect(() => {
        getData()
        .then( (data) => {
            console.log("Datos recibidos", data)
            setProducts(data)
        })
    }, [])

    return (
        <section className="ItemList">
            <h3>-- {props.greeting}</h3>
            {
                products.map(item =>
                    <Item title={item.title}
                        price={item.price}
                        stock={item.stock}
                        img={item.img} />
                )
            }
        </section>
    )
}

export default ItemListContainer