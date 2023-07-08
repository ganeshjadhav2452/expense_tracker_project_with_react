import { Fragment } from "react";
import CompleteProfile from "./components/pages/profile/CompleteProfile";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import CompleteProfileButtonWindow from "./components/pages/profile/CompleteProfileButtonWindow";
import EmailVerification from "./components/pages/profile/EmailVerification";
import ResetPassword from "./components/pages/profile/ResetPassword";
import LandingPage from "./components/pages/landingPage/LandingPage";
import ExpenseGenerator from "./components/pages/ExpenseFolder/ExpenseGenerator/ExpenseGenerator";
import ExpenseFormContextProvider from "./contextStore/ExpenseFormContext/ExpenseFormContextProvider";
function App() {
  return (
    <Router>
      <ExpenseFormContextProvider>
      <Fragment >

     
        <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/expensegenerator' component={ExpenseGenerator}/>
        <Route exact path='/auth' component={AuthPage}/>
        <Route exact path='/completeprofilebuttonwindow' component={CompleteProfileButtonWindow}/>
        <Route exact path='/completeprofile' component={CompleteProfile}/>
        <Route  exact path='/emailverification' component={EmailVerification}/>
        <Route  exact path='/resetpassword' component={ResetPassword}/>
        </Switch>
      </Fragment>
      </ExpenseFormContextProvider>
    </Router>

  );
}

export default App;
