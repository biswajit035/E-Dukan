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
        <Route path="*" element={<Error />} />

      </Routes>
    </>

  );
}

export default App;
