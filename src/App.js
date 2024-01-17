import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Homepage from './components/Homepage/Homepage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Productspage from "./components/Productspage/Productspage";
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route exact path='/product/:id' Component={ProductDetails} />
        <Route exact path='/products' Component={Productspage} />
        <Route exact path="/search" Component={Search} />
        <Route path="/products/:keyword" component={Productspage} />



      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover
        theme="light"
      />

      <Footer />

    </div>
  );
}

export default App;
