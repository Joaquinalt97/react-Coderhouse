import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer';
import { exportProducts } from './data/FirestoreService';

function App() {

  return (
    <BrowserRouter>
    <button onClick={exportProducts}>Borrar despues</button>
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