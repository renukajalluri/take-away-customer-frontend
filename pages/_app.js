import '../styles/globals.css'
import { AuthContextProvider } from '../stores/authContext'
// import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (<AuthContextProvider>
  <Component {...pageProps} />
  </AuthContextProvider>)
}

export default MyApp
