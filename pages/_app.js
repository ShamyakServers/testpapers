import Footer from "/components/Footer";
import Navbar from "/components/Header";
import "/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return <SessionProvider session={session}>      <ToastContainer
  position="top-center"
  autoClose={1000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover={false}
/><Navbar/><Component {...pageProps} /><Footer/></SessionProvider>;
}
