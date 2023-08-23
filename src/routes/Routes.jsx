import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
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
import CheckOut from "../pages/payment/CheckOut";
import PaymentHistory from "../pages/dashboard/PaymentHistory";
import SpecialOffer from "../components/specialOffer/SpecialOffer";
import AdminRoute from "./AdminRoute";
import StoreManagerRoute from "./StoreManagerRoute";
import UserDashboard from "../pages/dashboard/UserDashboard";
import ProductUpdate from "../pages/dashboard/ProductUpdate";
import OfferRoute from "../pages/Home/OfferRoute";


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
                path: '/special_offer',
                element: <SpecialOffer></SpecialOffer>
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
                path: '/offerProducts',
                element: <OfferRoute></OfferRoute>
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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/userDash',
                element: <UserDashboard />
            },
            {
                path: '/dashboard/Manage_account',
                element: <AdminRoute><ManageAccount /></AdminRoute>
            },
            {
                path: '/dashboard/My_order',
                element: <MyOrder />
            },
            {
                path: '/dashboard/My_cart',
                element: <MyCart />
            },
            {
                path: '/dashboard/Check_Out_Route',
                element: <CheckOut />
            },
            {
                path: '/dashboard/Upload_&_Update',
                element: <AdminRoute><Upload_Update /></AdminRoute>
            },
            {
                path: '/dashboard/Product_Update',
                element: <StoreManagerRoute><ProductUpdate /></StoreManagerRoute>
            },
            {
                path: '/dashboard/Administration',
                element: <StoreManagerRoute><Administration /></StoreManagerRoute>
            },
            {
                path: '/dashboard/Management',
                element: <StoreManagerRoute><Management /></StoreManagerRoute>
            },
            {
                path: '/dashboard/Send_mail',
                element: <SendMail />
            },
            {
                path: '/dashboard/history_of_payment',
                element: <AdminRoute><PaymentHistory /></AdminRoute>
            },
        ]
    }
])

export default router;