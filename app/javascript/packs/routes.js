import React from 'react'

import Index from "views/examples/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

import Admin from "views/admin"
import Superadmin from "views/superadmin"
import Home from "views/home"
import Contact from "views/contact"
import Email from "views/email"
import SMS from "views/sms"
import SMSShippedScheduled from "views/sms/shipped-and-scheduled"
import SMSAutoPreset from "views/sms/auto-preset"
import SMSReceived from "views/sms/received"
import EmailShippedScheduled from "views/email/shipped-and-scheduled"
import EmailAutoPreset from "views/email/auto-preset"

var routes = [
  {
    path: "/home",
    name: "Panel de control",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    layout: "/dashboard"
  },
  {
    path: "/contact",
    name: "Contactos",
    icon: "ni ni-single-02 text-blue",
    component: Contact,
    layout: "/dashboard"
  },
  {
    path: "/sms",
    name: "SMS",
    icon: "ni ni-chat-round text-info",
    component: SMS,
    layout: "/dashboard"
  },
  {
    path: "/shipped-and-scheduled",
    name: "Enviados y programados",
    icon: "ni ni-chat-round text-info",
    component: SMSShippedScheduled,
    layout: "/dashboard"
  },
  {
    path: "/auto-preset",
    name: "Predefinidos y automáticos",
    icon: "ni ni-chat-round text-info",
    component: SMSAutoPreset,
    layout: "/dashboard"
  },
  {
    path: "/received",
    name: "Recibidos",
    icon: "ni ni-chat-round text-info",
    component: SMSReceived,
    layout: "/dashboard"
  },
  {
    path: "/email",
    name: "Email",
    icon: "ni ni-email-83 text-primary",
    component: Email,
    layout: "/dashboard"
  },
  {
    path: "/email-shipped-and-scheduled",
    name: "Enviados y programados",
    icon: "ni ni-email-83 text-primary",
    component: EmailShippedScheduled,
    layout: "/dashboard"
  },
  {
    path: "/email-auto-preset",
    name: "Predefinidos y automáticos",
    icon: "ni ni-email-83 text-primary",
    component: EmailAutoPreset,
    layout: "/dashboard"
  },
  {
    path: "/admin",
    name: "Administración",
    icon: "fas fa-cog",
    component: Admin,
    layout: "/dashboard"
  },
  {
    path: "/superadmin",
    name: "Superamin",
    icon: "fas fa-cog",
    component: Superadmin,
    layout: "/dashboard"
  },
  // Example Routes
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/example/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/example/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/example/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/example/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/example/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/example/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/example/auth",
  },
];
export default routes;
