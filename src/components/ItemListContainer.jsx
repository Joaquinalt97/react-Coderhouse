import Item from "./Item"
import products from "../data/data"

function ItemListContainer(props) {
    console.log(products)
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