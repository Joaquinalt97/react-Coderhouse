import Item from "./Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getData, { getProductByCategory } from "../data/FirestoreService";
import "./ItemListContainer.css";


function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const { catParam } = useParams();

    useEffect(() => {
        if (catParam) {
            getProductByCategory(catParam)
                .then((data) => setProducts(data));
        } else {
            getData()
                .then((data) => {
                    console.log("Datos recibidos", data);
                    setProducts(data);
                });
        }
    }, [catParam]);

    return (
        <section className="ItemList">
            <h3>-- {greeting}</h3>

            <div className="product-grid">
                {products.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
}

export default ItemListContainer;
