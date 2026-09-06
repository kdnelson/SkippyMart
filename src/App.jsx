import './App.scss';
import './i18n'
import Header from './components/Header/HeaderTEMP'
import Home from './components/Home/HomeTEMP'
import Login from './components/Login/LoginTEMP'
import Checkout from './components/Checkout/CheckoutTEMP'
import Payment from './components/Payment/PaymentTEMP'
import Orders from './components/Orders/OrdersTEMP'
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
