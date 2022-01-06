import { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle } from "../styles/globals";
import { themeDark } from "@theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDark}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
