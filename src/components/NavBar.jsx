import CartWidget from "./CartWidget"
import { Link } from "react-router"

function Navbar () {
    return (
        <nav style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
            <Link to="/">Logo Tienda</Link> //*logo tienda
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-around", padding: "10px", border: "solid, gray", backgroundColor:"black"}}>
            <Link to="/category/xiaomi">Xiaomi</Link>
            <Link to="/category/samsung">Samsung</Link>
            <Link to="/category/iphone">Iphone</Link>
            <Link to="/category/honor">Honor</Link>
            <Link to="/detail">Detalle</Link> //* link ficticio
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar