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
    </div>
  );
}
