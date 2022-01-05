import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
