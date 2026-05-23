import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/product/ProductPage";
import CategoryPage from "./pages/category/CategoryPage";
import LoginPage from "./pages/login/LoginPage";

import Layoutdashboard from "./components/layout/Layoutdashboard";
import CustomerDash from "./pages_dash/customer/CustomerDash";
import CategoryDash from "./pages_dash/category/CategoryDash";
import ProductDash from "./pages_dash/product/ProductDash";
import CartDash from "./pages_dash/carts/CartDash";
import HomeDash from "./pages_dash/home/HomeDash";
function App() {
  return (
   
   <BrowserRouter>
      {/* Client side */}
      <Routes>
        <Route path="/" element={<Layout/>}>
                <Route path="" element={<HomePage/>} />
                <Route path="about"  element={<AboutPage/>} />
                <Route path="product"  element={<ProductPage />} />
                <Route path="category"  element={<CategoryPage />} />
                <Route path="login"  element={<LoginPage />} />
        </Route>
     
      {/* Back End  */}
      
          <Route path="/dashboard" element={<Layoutdashboard/>}>
                <Route path="" element ={<CategoryDash/>} />
                <Route path="customer" element={<CustomerDash/>}/>
                <Route path="category" element={<CategoryDash/>}/>
                <Route path="product" element={<ProductDash/>}/>
                <Route path="cart" element={<CartDash/>}/>
          </Route>
      </Routes>
      


      {/* const is_dashboard = window.location.pathname.includes("dashboard") // true or fails */}
      {/* {!is_dashboard&&<div>
          <Layout/>
          <Routes>
               
                <Route path="/" element={<HomePage/>} />
                <Route path="/about"  element={<AboutPage/>} />
                <Route path="/product"  element={<ProductPage />} />
                <Route path="/category"  element={<CategoryPage />} />
                <Route path="/login"  element={<LoginPage />} />
          </Routes>

      </div>}
          

      {is_dashboard&&<div>
           <Layoutdashboard/>
            <Routes>
              <Route path="dashboard" >
                <Route path="" element ={<HomeDash/>} />
                <Route path="customer" element={<CustomerDash/>}/>
                <Route path="category" element={<CategoryDash/>}/>
                <Route path="product" element={<ProductDash/>}/>
                <Route path="cart" element={<CartDash/>}/>

              </Route>
            </Routes>

      </div>} */}
         
   </BrowserRouter>
  );
}

export default App;
