import './App.css'
import Footer from './components/Footer'
import NavbarCom from './components/Navbar'
import NavbarMenu from './components/navbarMenu'
import MobileFooter from './components/MobileFooter'
import { Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections'
import NoMatch from './components/NoMatch'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import CollectionDetails from './pages/collectionDetails'
import Checkout from './pages/Checkout'
import AdminPanel from './pages/Admin/AdminPanel'
import CreateProduct from './pages/Admin/createProduct';
import UpdateProduct from './pages/Admin/updateProduct'



function App() {

  return (
    <>
      <NavbarCom />
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/collections' element={<Collections></Collections>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/recover' element={<ForgetPassword />}></Route>
        <Route path='/collections/details' element={<CollectionDetails></CollectionDetails>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/admin' element={<AdminPanel></AdminPanel>}></Route>
        <Route path='/admin/createProduct' element={<CreateProduct></CreateProduct>}></Route>
        <Route path='/admin/updateProduct' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
      <MobileFooter></MobileFooter>
      <Footer></Footer>
    </>
  )
}

export default App