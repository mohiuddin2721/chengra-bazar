import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
// import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import DetailSingleData from "./components/ReceivAllData/DetailSingleData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SelectedCategories from "./pages/Home/SelectedCategories";
import ShortCutDetail from "./components/ReceivAllData/ShortCutDetail";
import ProductsFilter from "./pages/ProductsFilter/ProductsFilter";


export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/products/:id" element={<DetailSingleData />} />
        <Route path="/productsFilter" element={<ProductsFilter />} />
        <Route path="/catagories/:id" element={<SelectedCategories />} />
        <Route path="/shortcut/:id" element={<ShortCutDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
