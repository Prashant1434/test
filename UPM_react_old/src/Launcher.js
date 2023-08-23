import { Switch } from "react-router-dom";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./Login";
import Owner from "./Owner"
function Launcher() {
    return (<Router>
                 <Switch>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/' component={Login}/>
                <Route exact path='/Owner' component={Owner}/>
              </Switch>
          </Router>
);
}

export default Launcher;