import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import BestProducts from "../components/bestProducts/BestProducts";
import ShortCutDetail from "../components/ReceivAllData/ShortCutDetail";
import SelectedCategories from "../pages/Home/SelectedCategories";
import ProductsFilter from "../pages/ProductsFilter/ProductsFilter";
import DetailSingleData from "../components/ReceivAllData/DetailSingleData";
import Dashboard from "../pages/dashboard/Dashboard";
import SignUp from "../Authentication/SignUp";
import SignIn from "../Authentication/SignIn";
import CustomerCare from "../components/customerCare/CustomerCare";
import PrivateRoute from "../routes/PrivateRoute";
import DisplayError from "../pages/displayError/DisplayError";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import ManageAccount from "../pages/dashboard/ManageAccount";
import MyOrder from "../pages/dashboard/MyOrder";
import MyCart from "../pages/dashboard/MyCart";
import Upload_Update from "../pages/dashboard/Upload_Update";
import Administration from "../pages/dashboard/Administration";
import Management from "../pages/dashboard/Management";
import SendMail from "../pages/dashboard/SendMail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/best_products',
                element: <BestProducts></BestProducts>
            },
            {
                path: '/Customer_care',
                element: <CustomerCare></CustomerCare>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/products/:id',
                element: <DetailSingleData></DetailSingleData>
            },
            {
                path: '/productsFilter',
                element: <ProductsFilter></ProductsFilter>
            },
            {
                path: '/catagories/:id',
                element: <SelectedCategories></SelectedCategories>
            },
            {
                path: '/shortcut/:id',
                element: <ShortCutDetail></ShortCutDetail>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/Manage_account',
                element: <ManageAccount></ManageAccount>
            },
            {
                path: '/dashboard/My_order',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/My_cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: '/dashboard/Upload_&_Update',
                element: <Upload_Update></Upload_Update>
            },
            {
                path: '/dashboard/Administration',
                element: <Administration></Administration>
            },
            {
                path: '/dashboard/Management',
                element: <Management></Management>
            },
            {
                path: '/dashboard/Send_mail',
                element: <SendMail></SendMail>
            },
        ]
    }
])

export default router;