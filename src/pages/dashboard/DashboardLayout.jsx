import React from 'react';
import DashboardHeader from '../../components/Header/DashboardHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

export default function DashboardLayout() {

    return (
        <div>
            {/* <DashboardHeader /> */}
            <Outlet />
        </div>
    );
}