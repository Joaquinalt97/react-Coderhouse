import Item from "./Item"
import getData, { getProductByCategory } from "../data/data"
import { useState, useEffect } from "react"
import { useParams } from "react-router";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const { catParam } = useParams();
    useEffect(() => {
        if (catParam) {
            getProductByCategory(catParam)
            .then ( (data) => setProducts(data))
        }
        else {
            getData()
                .then((data) => {
                    console.log("Datos recibidos", data)
                    setProducts(data)
                })
        }
    }, [catParam]);

    return (
        <section className="ItemList">
            <h3>-- {props.greeting}</h3>
            {
                products.map(item =>
                    <Item
                        key={item.id}
                        {...item}
                    />
                )
            }
        </section>
    )
}

export default ItemListContainer