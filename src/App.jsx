import { Outlet } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
 

  return (
    <>
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>

    </>
  )
}

export default App
