import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from './context/ProvideAuth';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';

export default function App() {
  return (
    <ProvideAuth>
      <Layout>
        <Router>
          <Switch>
            <Route path="/login">
              <Authentication />
            </Route>
            <PrivateRoutes exact path="/">
              <Home />
            </PrivateRoutes>
          </Switch>
        </Router>
      </Layout>
    </ProvideAuth>
  );
}
