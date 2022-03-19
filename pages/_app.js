import "../src/styles/globals.js";
import Theme from "../src/styles/theme";

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
