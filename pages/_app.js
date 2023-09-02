import "../src/styles/globals.js";
import Theme from "../src/styles/theme";
import "../src/styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
