import GlobalStyle from "../styles/globalStyles";
import "../styles/_globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
