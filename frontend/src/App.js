import Home from "./Pages/Home";
import Login from "./Layouts/Login";
import Error from './Pages/Error'
import AdminDashboard from './Pages/AdminDashboard'
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import SignUp from "./Layouts/SignUp";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Test from "./Pages/Test";
import Product from "./Pages/Product";
import Seller from "./Pages/Seller";
import Cart from "./Pages/Cart";



function App() {

  const { data, status } = useSelector((state) => state.buyer);

  useEffect(() => {
    // console.log(data);
    if (data.status == 'warn') {
      toast.warn(data.msg, {
        pauseOnHover: false,
      });
    }
    if (data.status == 'success') {
      toast.success(data.msg, {
        pauseOnHover: false,
      });
    }
  }, [data])

  return (
    // <div className="App" >
    //   <Home/>
    //   <Login/>
    // </div>
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login title="Login" />} />
          <Route path="signup" element={<SignUp title="Create Account" />} />
        </Route>
        <Route path="/admin" element={<Auth />}>
          <Route index element={<SignUp title="Create Admin Account" />} />
        </Route>
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="test" element={<Test />} />
        <Route path="product" element={<Product
          image="https://cdn.shopify.com/s/files/1/0263/2912/0813/products/p8.jpg"
          title="Buckle Wrap Skirt"
          price="1999" />} >
        <Route path=":id" element={<Product
          image="https://cdn.shopify.com/s/files/1/0263/2912/0813/products/p8.jpg"
          title="Buckle Wrap Skirt"
          price="1999" />} />
        </Route>
        <Route path="seller/*" element={<Seller/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="*" element={<Error />} />

      </Routes>
    </>

  );
}

export default App;
