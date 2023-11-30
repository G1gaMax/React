import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Location from './pages/Location'
import Products from './pages/Products'
import Home from './pages/Home'
import Cart from './components/Cart/Cart'
import { CartProvider } from '../context/CartContext'
function App() {


  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/:categoryID' element={<ItemListContainer />} />
          <Route path='/item/:productID' element={<ItemDetailContainer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/location' element={<Location />} />
          <Route path='/Cart' element={<Cart/>}/>

        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
