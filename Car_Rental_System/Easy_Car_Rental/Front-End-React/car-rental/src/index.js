import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Driver_Reg from "./pages/Driver_Reg";
import Customer_Reg from './pages/Customer_Reg';
import Layout1 from './pages/Layout';
import Layout2 from './pages/Layout2';
import Homepage from './pages/Homepage';
import Customer_Login from './pages/CustomerLogin';
import Driver_Login from './pages/DriverLogin.jsx';
import Show_Vehicles from './pages/Show_Vehicles.jsx';
import Premium_V from './pages/Premium_Vehicles';
import Admin_Login from './pages/Admin_Login.jsx';
import Admin_CusView from './pages/Admin/Admin_AllView';
import Cus_Addmin from './pages/Admin/Customer_Ad';
import Driver_Admin from './pages/Admin/Driver_Ad.jsx';
import Car_Admin from './pages/Admin/Car_Ad';
import NewCar_Admin from './pages/Admin/Add_NewCar.jsx';
import Cus_Order from './pages/Order/Customer_Order'
import Driver_View from './pages/Driver/Driver_View';
import Order_Admin from './pages/Admin/Order_Ad.jsx'
import history from '../src/history';

export default function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<Homepage />} />
          <Route path="customer" element={<Customer_Login />} />
          <Route path="driver" element={<Driver_Login />} />
          <Route path="admin" element={<Admin_Login />} />
          <Route path="show_vhicles" element={<Show_Vehicles />} />
          <Route path="premium_vehicle" element={<Premium_V />} />
          <Route path="add_order" element={<Cus_Order />} />
        </Route>

        <Route element={<Layout2 />}>
          <Route path="admin_cusView" element={<Admin_CusView />} />
          <Route path="cus_Admin" element={<Cus_Addmin />} />
          <Route path="driver_Admin" element={<Driver_Admin />} />
          <Route path="car_Admin" element={<Car_Admin />} />
          <Route path="add_newCar" element={<NewCar_Admin />} />
          <Route path="driver_view" element={<Driver_View />} />
          <Route path="order_Admin" element={<Order_Admin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
