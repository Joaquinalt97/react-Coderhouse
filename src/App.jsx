// import { useState } from 'react';
import './App.css'
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={ <ItemListContainer greeting={"Tienda de Smartphones"} />}
        />
        <Route
          path="/detail/:idParam"
          element={ <ItemDetailContainer/> }
        />
        <Route
        path="/category/:catParam"
        element={ <ItemListContainer greeting="Categoria de Productos"/>}
        />
        <Route
          path="*"
          element={<div><h2>Error 404: No encontramos resultados</h2></div>}
        />
      </Routes>
    </BrowserRouter >
  )
}

export default App;
//SnakeCase (La primer letra va con minuscula. ej : ItemListContainer)
//CamelCase (la primer letra de la palabra lleva minuscula. ej : itemListContainer)