import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import AdminDashboard from './admin/AdminDashboard';
import PrivateUser from './admin/PrivateUser';
import PrivateAdmin from './admin/PrivateAdmin';
import UserDashboard from './admin/UserDashboard';
import Home from './core/Home';
import Shop from './core/Shop';
import Signin from './core/Signin';
import Signup from './core/Signup';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import ProDetail from './core/ProDetail';
import Cart from './core/Cart';
import Orders from './admin/Orders';

function Routes () {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/cart" component={Cart} />
      <Route path="/orders" component={Orders} />
      <PrivateAdmin path="/admin/dashboard" component={AdminDashboard} />
      <PrivateUser path="/user/dashboard" component={UserDashboard} />
      <Route path="/create/category" component={AddCategory} />
      <Route path="/create/product" component={AddProduct} />
      <Route path="/product/:product_id" component={ProDetail} />
    </Switch>
  )
}
export default Routes;
