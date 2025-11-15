import { Link } from "react-router";
import ItemCount from "./ItemCount";
import "./Item.css"

function Item(props) {
    console.log(props.title, props.price)

    return (
        <div className="item-card" >
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