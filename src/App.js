import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Homepage from './components/Homepage/Homepage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route exact path='/product/:id' Component={ProductDetails} />


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
