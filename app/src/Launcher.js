import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
<<<<<<< HEAD
import Owner from "./Owner";
import AddOwner from "./AddOwner";
import AddEmployee from "./AddEmployee";
import Admin from "./Admin";
import Tenant from "./Tenant";
import Employee from "./Employee";
import EmployeeDetails from "./EmployeeDetails";
import OwnerDetails from "./OwnerDetails";
import ManageSalary from "./ManageSalary";
import FundManagement from "./FundManagement";
import Complaints from "./Complaints";
function Launcher() {
  return (<Router>
    <Switch>
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Owner' component={Owner}/>
      <Route exact path='/Admin' component={Admin}/>
      <Route exact path='/Tenant' component={Tenant}/>
      <Route exact path='/Employee' component={Employee}/>
      <Route exact path='/AddOwner' component={AddOwner}/>
      <Route exact path='/AddEmployee' component={AddEmployee}/>
      <Route exact path='/EmployeeDetails' component={EmployeeDetails}/>
      <Route exact path='/ManageSalary' component={ManageSalary}/>
      <Route exact path='/OwnerDetails' component={OwnerDetails}/>
      <Route exact path='/FundManagement' component={FundManagement}/>
      <Route exact path='/Complaints' component={Complaints}/>
      <Route exact path='/' component={Login} />
    </Switch>
  </Router>
  );
=======
import Admin from "./Routes/Admin";
function Launcher() {
    return (<Router>
                 <Switch>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/' component={Login}/>
                <Route exact path="/Admin" component={Admin}/>
              </Switch>
          </Router>
);
>>>>>>> 0f1e1cb8c1ff9d846e81dad3f860fb7778d72d31
}

export default Launcher;