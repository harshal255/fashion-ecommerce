import './App.css'
import Footer from './components/Footer'
import NavbarCom from './components/Navbar'
import NavbarMenu from './components/navbarMenu'
import MobileFooter from './components/MobileFooter'
import { Routes, Route } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import CollectionDetails from './pages/collectionDetails'
import CheckoutForm from './pages/CheckoutForm'
import AdminPanel from './pages/Admin/AdminPanel'
import CreateProduct from './pages/Admin/createProduct'
import Dashboard from './pages/Admin/DashBoard'
import { AuthProvider } from './AuthContext';
import Orders from './pages/Orders/orders'
import UserDetails from './components/userdetail'
import TopCollections from './pages/TopCollections'
import GownCollections from './pages/GownCollections'
import SareesCollections from './pages/SareesCollections'
import LehengaCholiCollections from './pages/LehengaCholiCollections'

function App() {
  return (
    <>
      <AuthProvider>
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
            path="/LehengaCholiCollections"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <LehengaCholiCollections />
                <MobileFooter />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/SareesCollections"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <SareesCollections />
                <MobileFooter />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/GownCollections"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <GownCollections />
                <MobileFooter />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/TopCollections"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <TopCollections />
                <MobileFooter />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/user"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <UserDetails />
                <MobileFooter />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/collections/details"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <CollectionDetails />
                <MobileFooter />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/admin"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <AdminPanel />
                <MobileFooter />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/admin/dash"
            element={
              <>
                <Dashboard />
              </>
            }
          ></Route>
          <Route
            path="/admin/createproduct"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <CreateProduct />
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
            path="/orders"
            element={
              <>
                <NavbarCom />
                <NavbarMenu />
                <Orders/>
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
        </Routes >
      </AuthProvider>
    </>
  );
}

export default App;