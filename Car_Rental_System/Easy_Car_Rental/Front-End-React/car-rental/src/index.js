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
import Layout1 from './pages/Layout';
import Layout2 from './pages/Layout2';
import Homepage from './pages/Homepage';
import Customer_Login from './pages/CustomerLogin';
import Driver_Login from './pages/DriverLogin.jsx';
import Luxary_V from './pages/Luxary_Vehicles';
import Premium_V from './pages/Premium_Vehicles';
import Admin_Login from './pages/Admin_Login.jsx';
import Admin_CusView from './pages/Admin/Admin_AllView';
import Cus_Addmin from './pages/Admin/Customer_Ad';
import Driver_Admin from './pages/Admin/Driver_Ad.jsx';
import Car_Admin from './pages/Admin/Car_Ad';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<Homepage />} />
          <Route path="customer" element={<Customer_Login />} />
          <Route path="driver" element={<Driver_Login />} />
          <Route path="admin" element={<Admin_Login />} />
          <Route path="luxary_vehicle" element={<Luxary_V />} />
          <Route path="premium_vehicle" element={<Premium_V />} />
          {/* <Route path="admin_cusView" element={<Admin_CusView />} /> */}
        </Route>

        <Route element={<Layout2 />}>
          <Route path="admin_cusView" element={<Admin_CusView />} />
          <Route path="cus_Admin" element={<Cus_Addmin />} />
          <Route path="driver_Admin" element={<Driver_Admin />} />
          <Route path="car_Admin" element={<Car_Admin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
