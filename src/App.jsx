// import { useState } from 'react';
import './App.css'
import ItemCount from './components/ItemCount';
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
          element={<ItemListContainer greeting={"Tienda de Remeras Dev"} />}
        />
        </Route>
      <Route
        path="/detail"
        element={<h2>Detalle</h2>}>
      </Route>
    </Routes>
    </BrowserRouter >
  )
}

export default App;
//SnakeCase (La primer letra va con minuscula. ej : ItemListContainer)
//CamelCase (la primer letra de la palabra lleva minuscula. ej : itemListContainer)