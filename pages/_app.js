import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/app.css";
import "../styles/Profile.css";
import "../styles/Jobs.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
