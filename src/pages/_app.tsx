import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [suppressRendering, setSuppressRendering] = useState(true);

  useEffect(() => {
    setSuppressRendering(false);
  }, []);

  return suppressRendering ? null : <Component {...pageProps} />;
}
