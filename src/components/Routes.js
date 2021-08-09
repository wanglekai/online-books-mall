import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './core/Home';
import Shop from './core/Shop';

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;
