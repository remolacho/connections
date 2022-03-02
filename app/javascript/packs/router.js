import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

// import AdminExampleLayout from "layouts/examples/Admin.js";
// import AuthExampleLayout from "layouts/examples/Auth.js";
// import Index from "views/examples/Index.js";
// import Profile from "views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import ExampleLogin from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";

import DashboardLayout from "layouts/dashboard"
import AuthLayout from "layouts/auth"

import DashboardNavbar from 'components/shared/dashboard-navbar';
import DashboardSales from "views/dashboard/sales"
import DashboardMessages from "views/dashboard/messages"
import DashboardClientsSMPP from "views/dashboard/clients-smpp"
import DashboardProvidersSMPP from "views/dashboard/providers-smpp"
// Temporary routes. START 
// Note: this can be handled in a single view by showing and hiding components by session.
import DashboardSellerSales from 'views/dashboard-seller/sales'
import DashboardSellerMessages from 'views/dashboard-seller/messages'
import DashboardAdminClient from 'views/dashboard-admin-client'
import DashboardClient from 'views/dashboard-client'
// Temporary routes. END
import Contact from "views/contact"
import Email from "views/email/send"
import SMS from "views/sms/send"
import SMSShippedScheduled from "views/sms/shipped-scheduled"
import SMSAutoPreset from "views/sms/auto-preset"
import SMSReceived from "views/sms/received"
import SMSShippedId from "views/sms/shipped-scheduled/[shipped_id]"
import EmailShippedScheduled from "views/email/shipped-scheduled"
import EmailShippedId from "views/email/shipped-scheduled/[shipped_id]"
import EmailAutoPreset from "views/email/auto-preset"
import EmailUnsubscribed from "views/email/unsubscribed"
import AdminAccount from "views/admin/account"
import AdminReport from "views/admin/reports"
import ShoppingHistory from "views/admin/shopping-history";
import AdminUser from "views/admin/user";
import AdminClient from "views/admin/client";
import SuperadminUser from "views/superadmin/user";
import SuperadminClient from "views/superadmin/client";
import SuperadminClientId from "views/superadmin/client/[client_id]"
import SuperadminBuy from "views/superadmin/buy";
import Login from "views/auth/login";
import RecoveryPassword from "views/auth/recovery-password";
import SignupType from "views/auth/signup-type";
import SignupCompany from "views/auth/signup-company";
import SignupUser from "views/auth/signup-user";
import Checkout from 'views/checkout';

export default function Router(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />} >
          <Route index element={<Navigate to="/dashboard/sales" />} />
          <Route path="dashboard" element={<DashboardNavbar />}>
            <Route index element={<Navigate to="/dashboard/sales" />} />
            <Route path="sales" element={<DashboardSales />} />
            <Route path="messages" element={<DashboardMessages />} />
            <Route path="clients-smpp" element={<DashboardClientsSMPP />} />
            <Route path="providers-smpp" element={<DashboardProvidersSMPP />} />
          </Route>
          <Route path="dashboard-seller" element={<DashboardNavbar />}>
            <Route index element={<Navigate to="/dashboard-seller/sales" />} />
            <Route path="sales" element={<DashboardSellerSales />} />
            <Route path="messages" element={<DashboardSellerMessages />} />
          </Route>
          <Route path="dashboard-admin-client" element={<DashboardNavbar />}>
            <Route index element={<DashboardAdminClient />}/>
          </Route>
          <Route path="dashboard-client" element={<DashboardNavbar />}>
            <Route index element={<DashboardClient />}/>
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="sms">
            <Route path="send" element={<SMS />} />
            <Route path="shipped-and-scheduled">
              <Route index element={<SMSShippedScheduled />} />
              <Route path=":shipped_id" element={<SMSShippedId />} />
            </Route>
            <Route path="auto-preset" element={<SMSAutoPreset />} />
            <Route path="received" element={<SMSReceived />} />
          </Route>
          <Route path="email">
            <Route path="send" element={<Email />} />
            <Route path="shipped-and-scheduled">
              <Route index element={<EmailShippedScheduled />} />
              <Route path=":shipped_id" element={<EmailShippedId />} />
            </Route>
            <Route path="auto-preset" element={<EmailAutoPreset />} />
            <Route path="unsubscribed" element={<EmailUnsubscribed />} />
          </Route>
          <Route path="admin">
            <Route path="account" element={<AdminAccount />} />
            <Route path="reports" element={<AdminReport />} />
            <Route path="shopping-history" element={<ShoppingHistory />} />
            <Route path="users" element={<AdminUser />} />
            <Route path="clients" element={<AdminClient />} />
          </Route>
          <Route path="superadmin">
            <Route path="users" element={<SuperadminUser />} />
            <Route path="clients">
              <Route index element={<SuperadminClient />} />
              <Route path=":client_id" element={<SuperadminClientId />} />
            </Route>
            <Route path="buy" element={<SuperadminBuy />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="recovery-password" element={<RecoveryPassword />} />
          <Route path="signup">
            <Route index element={<SignupType />} />
            <Route path="company" element={<SignupCompany />} />
            <Route path="user" element={<SignupUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

// var routes = [
//   // Example Routes
//   {
//     path: "/index",
//     name: "Dashboard",
//     icon: "ni ni-tv-2 text-primary",
//     component: Index,
//     layout: "/example/admin",
//   },
//   {
//     path: "/icons",
//     name: "Icons",
//     icon: "ni ni-planet text-blue",
//     component: Icons,
//     layout: "/example/admin",
//   },
//   {
//     path: "/maps",
//     name: "Maps",
//     icon: "ni ni-pin-3 text-orange",
//     component: Maps,
//     layout: "/example/admin",
//   },
//   {
//     path: "/user-profile",
//     name: "User Profile",
//     icon: "ni ni-single-02 text-yellow",
//     component: Profile,
//     layout: "/example/admin",
//   },
//   {
//     path: "/tables",
//     name: "Tables",
//     icon: "ni ni-bullet-list-67 text-red",
//     component: Tables,
//     layout: "/example/admin",
//   },
//   {
//     path: "/login",
//     name: "Login",
//     icon: "ni ni-key-25 text-info",
//     component: ExampleLogin,
//     layout: "/example/auth",
//   },
//   {
//     path: "/register",
//     name: "Register",
//     icon: "ni ni-circle-08 text-pink",
//     component: Register,
//     layout: "/example/auth",
//   },
// ];
