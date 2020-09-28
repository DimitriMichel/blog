import "../styles.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
// This default export is required in a new `pages/_app.js` file.
export default MyApp;
