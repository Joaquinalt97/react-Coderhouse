import './App.css'
import ItemListContaier from './components/ItemListContainer'
import Navbar from './components/NavBar';
function App(){
  return (
    // se puede eliminar "section y tener una etiqueta vacia = <> "
    <section>
      <div className="box">
        <h1>Tienda React</h1></div>
      <div id="div2">
        <h2>Bienvenidos Clase 2</h2>
      </div>
      <Navbar/>
      <ItemListContaier />
    </section>
  )
}

export default App;
//SnakeCase (La primer letra va con minuscula. ej : ItemListContainer)
//CamelCase (la primer letra de la palabra lleva minuscula. ej : itemListContainer)