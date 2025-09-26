import Item from "./Item"

function ItemListContainer(){
    return (
        <section>
            <h3>Nuestros Productos</h3>
            <Item title="Remera Roja JS" price="2000" img= "" />
            <Item title="Remera React" price="1500" />
        </section>
    )
}

export default ItemListContainer