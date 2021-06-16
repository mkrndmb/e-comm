
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/ShopPage';


function App() {
  return (
      <>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      </>
  );
}

export default App;
