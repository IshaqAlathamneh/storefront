import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import Cart from './components/cart';
function App() {
  return (
    <>
    {/* <Cart/> */}
    <Header/>
    <Categories/>
    <Products/>
    <Footer/>
    </>
  );
}

export default App;
