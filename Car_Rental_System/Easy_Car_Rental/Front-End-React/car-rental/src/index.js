/*import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Driver_Reg from "./pages/Driver_Reg";
import Customer_Reg from './pages/Customer_Reg';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import Customer_Login from './pages/CustomerLogin';
import Driver_Login from './pages/DriverLogin.jsx';
import Luxary_V from './pages/Luxary_Vehicles';
import Premium_V from './pages/Premium_Vehicles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="customer" element={<Customer_Login />} />
          <Route path="driver" element={<Driver_Login />} />
          <Route path="luxary_vehicle" element={<Luxary_V />} />
          <Route path="premium_vehicle" element={<Premium_V />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
