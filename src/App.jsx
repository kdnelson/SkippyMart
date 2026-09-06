import './App.scss';
import './i18n'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout'
import Payment from './components/Payment/Payment'
import Orders from './components/Orders/Orders'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter 
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true, 
    }}>
      <Routes>
        <Route path="/" element={<><Header /><Home /></>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/checkout" element={<><Header /><Checkout /></>}/>
        <Route path="/payment" element={<><Header /><Payment /></>}/>
        <Route path="/orders" element={<><Header /><Orders /></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
