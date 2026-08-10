import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {LandingPage} from "./Components-Landingpage/LandingPage";
import {LoginPage}from "./Components-Loginpage/Loginpage";
import {TwoStepverification }from "./Components-Loginpage/TwoStepVerification";
import {Verificationcode} from "./Components-Loginpage/Verificationcode";
import {ForgotPassword} from "./Components-Loginpage/ForgotPassword";
import {ForgotPasswordOtp} from "./Components-Loginpage/ForgotPasswordOtp";
import {ResetPassword} from "./components-Loginpage/ResetPassword";
import {ResetPasswordSuccess} from"./Components-Loginpage/ResetPasswordSuccess";

import { HRregistration } from "./components-registration/HRregistration";
import { MentorRegistration } from "./components-registration/MentorRegistration";
import {InternRegistration} from "./components-registration/InternRegistration";
import {CompanyRegistration} from "./components-registration/CompanyRegistration";
import {AdminRegistration} from "./components-registration/AdminRegistration";

import { HrDashboard } from "./Components-Hr/HrDashboard";

import { InternLoginpage } from "./Components-Loginpage/InternLoginpage";
import { MentorLoginpage } from "./Components-Loginpage/MentorLoginpage";
import { CompanyLoginpage } from "./Components-Loginpage/CompanyLoginpage";
import { HrLoginpage } from "./Components-Loginpage/HrLoginpage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/twostepverification",
    element: <TwoStepverification />,
  },
  {
    path: "/verificationcode",
    element: <Verificationcode />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ForgotPasswordOtp",
    element: <ForgotPasswordOtp />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/ResetPasswordSuccess",
    element: <ResetPasswordSuccess />,
  },

  {
    path: "/HRregistration",
    element: <HRregistration />,
  },
   {
    path: "/MentorRegistration",
    element: <MentorRegistration />,
  },
  {
    path:"/InternRegistration",
    element:<InternRegistration/>,
  },
  {
    path: "/CompanyRegistration",
    element:<CompanyRegistration/>
  },

  {
    path:"/AdminRegistration",
    element:<AdminRegistration/>
  },
  {
    path:"/HrDashboard",
    element:<HrDashboard/>
  },
   {
    path:"/InternLoginpage",
    element:<InternLoginpage/>
  },
  {
    path:"/MentorLoginpage",
    element:<MentorLoginpage/>
  },
   {
    path:"/CompanyLoginpage",
    element:<CompanyLoginpage/>
  },
   {
    path:"/HrLoginpage",
    element:<HrLoginpage/>
  },

],{
    basename: "/internms",
  }
 );

function App() {
  return <RouterProvider router={router} />;
}

export default App;