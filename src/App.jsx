import './App.css'
import Footer from './components/Footer'
import Leandingpage from './components/Leandingpage'
import Leanding2 from './components/Leanding2'
import NavbarCom from './components/Navbar'
import Leanding3 from './components/Leanding3'
import NavbarMenu from './components/navbarMenu'
import OurProducts from './components/OurProducts'
import LatestBlog from './components/LatestBlog'
import ImageGallary from './components/ImageGallary'


function App() {

  return (
    <>
      <NavbarCom />
      <NavbarMenu />
    
      <div className="bg-white">
        <Leandingpage></Leandingpage>
        <Leanding2></Leanding2>
        <Leanding3></Leanding3>
        <OurProducts></OurProducts>
        <LatestBlog></LatestBlog>
        <ImageGallary></ImageGallary>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App