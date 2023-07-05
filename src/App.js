import { Fragment } from "react";
import CompleteProfile from "./components/pages/profile/CompleteProfile";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Profile from "./components/pages/profile/Profile";
function App() {
  return (
    <Router>
      <Fragment >
        <Switch>
        <Route path='/auth' component={AuthPage}/>
        <Route path='/completeprofile' component={CompleteProfile}/>
        <Route path='/profile' component={Profile}/>
        </Switch>
      </Fragment>
    </Router>

  );
}

export default App;
