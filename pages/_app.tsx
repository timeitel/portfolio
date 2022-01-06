import { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { getGlobalStyle } from "../styles/globals";
import { themeDark } from "@theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDark}>
      <Global styles={getGlobalStyle(themeDark)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
