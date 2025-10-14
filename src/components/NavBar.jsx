import CartWidget from "./CartWidget"

function Navbar () {
    return (
        <nav>
            <a href="/"></a> //*logo tienda
            <ul>
            <a href="/">Xiaomi</a>
            <a href="/">Samsung</a>
            <a href="/">Iphone</a>
            <a href="/">Honor</a>
            <a href="/detail"></a>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar