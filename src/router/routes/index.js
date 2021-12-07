import { lazy } from "react";

// ** Document title
const TemplateTitle = "InvoCom";

// ** Default Route
const DefaultRoute = "/login";

// ** Merge Routes
const Routes = [
  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/home",
    component: lazy(() => import("../../views/Home")),
  },
  {
    path: "/apps/chat",
    component: lazy(() => import("../../views/apps/chat")),
  },

  {
    path: "/register",
    component: lazy(() => import("../../views/Register")),
    layout: "BlankLayout",
  },
  {
    path: "/forgot-password",
    component: lazy(() => import("../../views/ForgotPassword")),
    layout: "BlankLayout",
  },
  {
    path: "/reset-password",
    component: lazy(() => import("../../views/ResetPassword")),
    layout: "BlankLayout",
  },
  {
    path: "/leads",
    component: lazy(() => import("../../views/Leads")),
  },
  {
    path: "/meetings",
    component: lazy(() => import("../../views/Meeting")),
  },
  {
    path: "/analytics",
    component: lazy(() => import("../../views/Analytics")),
  },
  {
    path: "/setting",
    component: lazy(() => import("../../views/Setting")),
  },
];

export { DefaultRoute, TemplateTitle, Routes };
