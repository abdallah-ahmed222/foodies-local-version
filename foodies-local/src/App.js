import { Outlet } from "react-router-dom";
import AppNav from "./components/AppNav";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';


function App()
{
  return (
    <div className="App">
      <AppNav />
      <ToastContainer theme="dark" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
