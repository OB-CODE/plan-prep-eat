import { type AppType } from "next/app";
import { useEffect, useState } from "react";
import 'dotenv/config'

import { api } from "~/utils/api";

import "~/styles/global.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) return null;

  return (
    <div suppressHydrationWarning id="app" className="min-h-screen">
      {typeof window === "undefined" ? null : <Component {...pageProps} />}
    </div>
  );
};

export default api.withTRPC(MyApp);
