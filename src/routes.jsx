import { createBrowserRouter } from "react-router-dom";
import Splash from "./components/spalsh/Splash";
import VerifyPhone from "./auth/VerifyPhone";
import Login from "./auth/Login";
import MainPage from "./mainPage";
import MenuItem from "./components/MenuItem";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verifyPhone",
    element: <VerifyPhone />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/item",
    element: <MenuItem />,
  },
]);

export default routes;
