import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import LazyPage1 from '../lazyload/Page/LazyPage1';
import LazyPage2 from '../lazyload/Page/LazyPage2';
import LazyPage3 from '../lazyload/Page/LazyPage3';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" className={ ({ isActive   }) => isActive? 'nav-active': '' } >Lazy1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={ ({ isActive   }) => isActive? 'nav-active': '' } >Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={ ({ isActive   }) => isActive? 'nav-active': '' } >Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
          <Routes>
            <Route path="/lazy1" element= {<LazyPage1/>}/>
            <Route path="/lazy2" element= {<LazyPage2/>}/>
            <Route path="/lazy3" element= {<LazyPage3/>}/>
            <Route path="/*" element={ <Navigate to="/lazy1" replace /> }/>
          </Routes>
          
      </div>
    </Router>
  );
}