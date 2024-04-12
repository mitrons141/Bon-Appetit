import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Front from './frontpage/front';
import Order from './frontpage/order';
import PaymentForm from "./frontpage/payment";
import Delivery from './frontpage/delivery';

function App() {

  return (
      <Router>
          <div className="App">
            <Routes>
              <Route path="/front" element={<Front />} />
              <Route path="/order" element={<Order />} />
              <Route path="/payment" element={<PaymentForm />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/" element={<Front />} />
            </Routes>
          </div>
    </Router>
  )
}

export default App