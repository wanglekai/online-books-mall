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

function Routes () {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <PrivateAdmin path="/admin/dashboard" component={AdminDashboard} />
      <PrivateUser path="/user/dashboard" component={UserDashboard} />
    </Switch>
  )
}
export default Routes;
