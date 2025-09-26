import CartWidget from "./CartWidget"

function Navbar () {
    return (
        <nav>
            <a href="http://"></a> //*logo tienda
            <ul>
                <li><a href="http://">Xiaomi</a></li>
                <li><a href="http://">Samsung</a></li>
                <li><a href="http://">Iphone</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar