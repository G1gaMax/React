import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
   
  const greeting = " Welcome! ¡Bienvenidos!  Bienvenue! Willkommen! Benvenuti!"

  return (
    <>
      <NavBar />
      <ItemListContainer greeting = {greeting}/>
      </>
  )
}

export default App
