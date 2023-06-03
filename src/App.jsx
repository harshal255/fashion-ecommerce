import './App.css'
import Footer from './components/Footer'
import Leandingpage from './components/Leandingpage'
import NavbarCom from './components/Navbar'
import NavbarMenu from './components/navbarMenu'

function App() {

  return (
    <>
      <NavbarCom />
      <NavbarMenu />
      <Leandingpage></Leandingpage>
      <Footer></Footer>
    </>
  )
}

export default App