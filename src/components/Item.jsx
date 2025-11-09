import { Link } from "react-router";
import ItemCount from "./ItemCount";

function Item(props) {
    console.log(props.title, props.price)

    return (
        <div className="item-card" style={{ border: "1px solid white", backgroundColor: "black", margin: "2px" }}>
            <img
                width="120"
                src={props.img} alt=""
            />
            <h4>{props.title} </h4>
            <p>Precio: $ {props.price} </p>
            <Link to={ `/detail/${props.id}` }>
                <button>Ver Detalle</button>
            </Link>
        </div>
    )
}

export default Item;