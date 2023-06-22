import React from "react";
import { Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import DetailSingleData from "./components/ReceivAllData/DetailSingleData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SelectedCategories from "./pages/Home/SelectedCategories";
import ShortCutDetail from "./components/ReceivAllData/ShortCutDetail";
import ProductsFilter from "./pages/ProductsFilter/ProductsFilter";
import BestProducts from "./components/bestProducts/BestProducts";
import CustomerCare from "./components/customerCare/CustomerCare";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="best_products" element={<BestProducts />} />
        <Route path="Customer_care" element={<CustomerCare />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/products/:id" element={<DetailSingleData />} />
        <Route path="/productsFilter" element={<ProductsFilter />} />
        <Route path="/catagories/:id" element={<SelectedCategories />} />
        <Route path="/shortcut/:id" element={<ShortCutDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
