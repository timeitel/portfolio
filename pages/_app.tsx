import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyles";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
