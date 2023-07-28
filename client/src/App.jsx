
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MobileFooter from './components/MobileFooter'
import Agents from './pages/Agents'
import Becomeagent from './pages/Becomeagent'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Property from './pages/Property'



function App() {


  return (
    <div className='mx-0 px-0 max-h-fit overflow-y-clip'>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home></Home>
              <MobileFooter></MobileFooter>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/becomeagent"
          element={
            <>
              <Becomeagent></Becomeagent>
              <MobileFooter></MobileFooter>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/agents"
          element={
            <>
              <Agents></Agents>
              <MobileFooter></MobileFooter>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/property"
          element={
            <>
              <Property></Property>
              <MobileFooter></MobileFooter>
              <Footer></Footer>
            </>
          }
        ></Route>

      </Routes>


    </div>
  )
}

export default App

