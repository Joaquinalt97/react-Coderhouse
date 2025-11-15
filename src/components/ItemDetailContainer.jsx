import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router";
import { getProductById } from "../data/FirestoreService";
import { GridLoader } from "react-spinners";

function ItemDetailContainer() {
    const [itemData, setItemData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { idParam } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(idParam).then((res) => {
            setItemData(res);
            setLoading(false);
        });
    }, [idParam]);

    return (
        <div
            className="item-detail"
            style={{
                border: "1px solid grey",
                backgroundColor: "#222",
                color: "white",
                padding: "20px",
                margin: "20px auto",
                width: "300px",
                borderRadius: "8px",
                textAlign: "center",
            }}
        >
            {loading ? (
                <GridLoader color={"#00bcd4"} size={20} />
            ) : itemData ? (
                <>
                    <img width="200" src={itemData.img} alt={itemData.title} />
                    <h3>{itemData.title}</h3>
                    <p>Precio: ${itemData.price}</p>
                    <ItemCount product={itemData} />
                    {/* <button onClick={() => addItem(itemData, 1)}>Agregar al carrito</button> */}
                </>
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
