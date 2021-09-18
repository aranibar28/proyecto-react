import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* Redirect, */
} from "react-router-dom";
import { Header, Footer, Main } from "components";
import { AuthRegister, AuthLogin } from "modules/auth";
import { Users } from "modules/users";
import { NotFound } from "modules/notfound";
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
            <Route path="/users">
              <Users />
            </Route>
            {/* <Redirect from="*" to="/login" /> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
