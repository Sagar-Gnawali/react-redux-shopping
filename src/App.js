import './App.css';
import { Header } from './containers/header';
import { ProductDetails } from './containers/productDetails';
import { ProductListing } from './containers/productListing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:product_id" exact component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
