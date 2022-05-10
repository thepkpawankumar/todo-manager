import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as ROUTES from './constants/routes';
import Landing from './pages/Landing';
import Todos from './pages/Todos';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Home from './pages/Home';
import { Container } from '@material-ui/core';
import { withAuthentication } from './components/Session';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Container>
          <Routes>
          <Route exact path={ROUTES.LANDING} component={Landing} element={<Landing/>} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} element={<SignUp/>} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} element={<SignIn/>} />
          <Route exact path={ROUTES.TODOS} component={Todos} element={<Todos />} />
          <Route exact path={ROUTES.HOME} component={Home} element={<Home/>} />
          </Routes>
          
        </Container>
      </div>
    </Router>
  );
}

export default withAuthentication(App);