import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import CardDetails from './components/details';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Switch>
        <Route exact path="/">
          <Categories />
          <Products />
        </Route>
        <Route exact path="/payment" component={CardDetails} />

      </Switch>
        <Footer />
    </BrowserRouter>
  );
}
export default App;
