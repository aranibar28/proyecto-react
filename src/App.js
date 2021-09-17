import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header, Footer, Main } from "components";
import { AuthRegister, AuthLogin } from "modules/auth";
export function App() {
  return (
    <Router>
      <div className="wrapper flex flex-col h-screen">
        <Header />
        <Main>
          <Switch>
            <Route path="/login">
              <AuthLogin />
            </Route>
            <Route path="/register">
              <AuthRegister />
            </Route>
            <Redirect from="/" to="/login" />
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
