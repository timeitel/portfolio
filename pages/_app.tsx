import { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../common/styles/globalStyles";
import { themeDark } from "@theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDark}>
      <Global styles={globalStyles(themeDark)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
