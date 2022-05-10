import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as ROUTES from './constants/routes';
import {Todos, SignIn, SignUp, Home} from './pages';
import { Container } from '@material-ui/core';
//import { withAuthentication } from './components/Session';
import RequireAuth from './components/RequireAuth';
function App() {
  return (
    <Router>
      <div>

         <Navigation />
        
        <Container>
          <Routes>
          <Route exact path={ROUTES.HOME}  element={<Home />} />
          <Route exact path={ROUTES.SIGN_UP}  element={<SignUp/>} />
          <Route exact path={ROUTES.SIGN_IN} element={<SignIn/>} />
          <Route
          path={ROUTES.TODOS}
          element={
          <RequireAuth>
          <Todos />
          </RequireAuth>
          }
          />
         
          </Routes>
          
        </Container>
      </div>
    </Router>
  );
}

export default App;