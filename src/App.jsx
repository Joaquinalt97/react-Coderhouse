import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartContextProvider } from './context/cartContext';
import Cartcontainer from './components/CartContainer';

function App() {

  return (
    <BrowserRouter>
    <h1>Bienvenido a la Tienda</h1>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Tienda de Smartphones"} />}
          />
          <Route
            path="/detail/:idParam"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/category/:catParam"
            element={<ItemListContainer greeting="Categoria de Productos" />}
          />
          <Route
          path='/cart'
          element={ < CartContainer />}
          />
          <Route
            path="*"
            element={<div><h2>Error 404: No encontramos resultados</h2></div>}
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter >

  )
}

export default App;
//SnakeCase (La primer letra va con minuscula. ej : ItemListContainer)
//CamelCase (la primer letra de la palabra lleva minuscula. ej : itemListContainer)
