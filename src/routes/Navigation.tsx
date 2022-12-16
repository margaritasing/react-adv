import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import { routes } from '../lazyload/router/routes';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
              { routes.map(({to, name}) => (
            <li key={ to }>
                <NavLink to={ to} className={ ({ isActive   }) => isActive? 'nav-active': '' } >{ name}</NavLink>
            </li>           
               ) )}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
          <Routes>

            {
              routes.map( route=>(
                <Route
                 key={route.to}
                 path={route.path} 
                 element= {<route.Component/>}/>
              ))
            }           
            <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> }/>
          </Routes>
          
      </div>
    </Router>
  );
}