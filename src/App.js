import React from 'react';
import './app.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import { Route , Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Customers from './Customers';
import Orders from './Orders';
import Analytics from './Analytics';
import Messages from './Messages';
import Products from './Products';
import Reports from './Reports';
import Settings from './Settings';
import AddProducts from './AddProducts';

const App = () => {
  return (
    <div className='container'>
      <Menu />
      <Switch>
        <Route path="/customers" component={Customers} />
        <Route path="/orders" component={Orders} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/messages" component={Messages} />
        <Route path="/products" component={Products} />
        <Route path="/reports" component={Reports} />
        <Route path="/settings" component={Settings} />
        <Route path="/addProducts" component={AddProducts} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;