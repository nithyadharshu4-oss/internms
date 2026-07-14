import "./App.css";

import {LandingPage} from "./Components-Landingpage/LandingPage";
import {Login}from "./Components-Loginpage/Loginpage";
import {TwoStepverification }from "./Components-Loginpage/TwoStepVerification";
import {VerificationCode} from "./Components-Loginpage/VerificationCode";
import {ForgotPassword} from "./Components-Loginpage/ForgotPassword";
import {ForgotPasswordOtp} from "./Components-Loginpage/ForgotPasswordOtp";
import {ResetPassword} from "./components-Loginpage/ResetPassword";
import {ResetPasswordSuccess} from"./Components-Loginpage/ResetPasswordSuccess";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HRregistration } from "./components-registration/HRregistration";
import { MentorRegistration } from "./components-registration/MentorRegistration";
import {InternRegistration} from "./components-registration/InternRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/twostepverification",
    element: <TwoStepverification />,
  },
  {
    path: "/verificationcode",
    element: <VerificationCode />,
  },
  {
  path: "/forgotpassword",
  element: <ForgotPassword />,
},
{
  path:"/forgotpasswordotp",
  element:<ForgotPasswordOtp/>
},
{
  path:"/resetpassword",
 element:<ResetPassword/>
},
{
  path:"/resetpasswordsuccess",
  element:<ResetPasswordSuccess/>
},
{
  path:"/HRregistration",
  element:<HRregistration/>
},
{
  path:"/MentorRegistration",
  element:<MentorRegistration/>
},
{
  path:"/InternRegistration",
  element:<InternRegistration/>
}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;