import logo from './logo.svg';
import './App.css';
import { CreateOrder } from './CreateOrder';
import { RetrieveOrder } from './RetrieveOrder';
import { UpdateOrder } from './UpdateOrder';
import { DeleteOrder } from './DeleteOrder';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h2 className="d-flex justify-content-center m-3">
          OrderPlacementSystem
        </h2>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/createorder">
                CreateOrder
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/retrieveorder">
                RetrieveOrder
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/updateorder">
                UpdateOrder
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/deleteorder">
                DeleteOrder
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route>
            <Route path='/createorder' component={CreateOrder} />
            <Route path='/retrieveorder' component={RetrieveOrder} />
            <Route path='/updateorder' component={UpdateOrder} />
            <Route path='/deleteorder' component={DeleteOrder} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
