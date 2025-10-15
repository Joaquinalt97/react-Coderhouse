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
        .catch ((error) => {
            console.error("error al obtener los datos", error);
        });
    }, []);

    return (
        <section className="ItemList">
            <h3>-- {props.greeting}</h3>
            {
                products.map(item =>
                    <Item 
                    key={item.id}
                    { ...item}
                    />
                )
            }
        </section>
    )
}

export default ItemListContainer