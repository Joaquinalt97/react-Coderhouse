import { useState, useEffect } from "react";
import ItemCount from "./ItemCount"
import { useParams } from "react-router"
import { getProductById } from "../data/data";
import { ClipLoader, GridLoader } from "react-spinners";

function ItemDetailContainer() {
    const [itemData, setItemData] = useState({ loading: true });

    const { idParam } = useParams();

    useEffect(() => {
        getProductById(idParam).then(res => setItemData(res))
    }, [idParam])

    return (
        <div className="item-card" style={{ border: "solid 1px grey", backgroundColor: "grey" }}>
            {
                itemData.loading
                    ? <GridLoader
                        color={"#01383D"}
                        size={75}
                    />
                    : <div>
                        <img
                            width="120"
                            src={itemData.img} alt={itemData.title}
                        />
                        <h4>{itemData.title}</h4>
                        <p>Precio: $ {itemData.price}</p>
                        <ItemCount product={itemData} />
                        {/* <button onClick={() => addItem(itemdata, 1)}>Agregar al carrito</button> */}
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer