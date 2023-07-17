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
import CheckoutForm from './pages/CheckoutForm'
import AdminPanel from './pages/Admin/AdminPanel'
import CreateProduct from './pages/Admin/createProduct';
import UpdateProduct from './pages/Admin/updateProduct'



function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarCom />
              <NavbarMenu />
              <Home />
              <MobileFooter />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/collections"
          element={
            <>
              <NavbarCom />
              <NavbarMenu />
              <Collections />
              <MobileFooter />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <NavbarCom />
              <NavbarMenu />
              <Login />
              <MobileFooter />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <>
              <NavbarCom />
              <NavbarMenu />
              <Register />
              <MobileFooter />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/recover"
          element={
            <>
              <NavbarCom />
              <NavbarMenu />
              <ForgetPassword />
              <MobileFooter />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={<CheckoutForm />}
        ></Route>
        <Route
          path="*"
          element={
            <>
              <NavbarCom />
              <NavbarMenu />
              <NoMatch />
              <MobileFooter />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;