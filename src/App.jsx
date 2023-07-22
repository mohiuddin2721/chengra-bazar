import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="best_products" element={<BestProducts />} />
        <Route path="Customer_care" element={<CustomerCare />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="dashboard" element={
            <Dashboard />
        } />
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
      <Footer /> */}
    </div>
  );
}
