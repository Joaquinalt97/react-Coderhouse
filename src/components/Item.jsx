function Item(props) {
    console.log(props.title, props.price)

    const texto = `hola soy productos ${props.title}`
    return (
        <div>
            <img 
            width="120" 
            src={props.img} alt="remera-roja" 
            />
            <h4>{ props.title} </h4>
            <p>Precio: $ {props.price} </p>
            <button>Ver Detalle</button>
            <small>{texto}</small>
        </div>
    )
}

export default Item;

//* REUTILIZABLE (Debemos tratar de Reutilizar el Codigo de Una Tarjeta por EJ).
//* props: Propiedades o atributos que le pasamos al componente, para diferenciarlos del resto o hacerlo que cambie de alguna manera.
