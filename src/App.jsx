import './App.css'
import Footer from './components/Footer'
import Leandingpage from './components/Leandingpage'
import Leanding2 from './components/Leanding2'

import NavbarCom from './components/Navbar'
import Leanding3 from './components/Leanding3'
import NavbarMenu from './components/navbarMenu'

function App() {

  return (
    <>
      <NavbarCom />
      <NavbarMenu />
      <Leandingpage></Leandingpage>
      <Leanding2></Leanding2>
      <Leanding3></Leanding3>
      <Footer></Footer>
    </>
  )
}

export default App