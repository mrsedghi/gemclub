import { useEffect, useState } from "react";

import Login from "../../auth/Login";
import SplashView from "./SplashView";

function Splash() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return <>{isLoading ? <SplashView /> : <Login />}</>;
}

export default Splash;
