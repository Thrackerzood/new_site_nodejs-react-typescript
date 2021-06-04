import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch,Redirect} from 'react-router-dom'
import Home from './home'
import Random from './random'
import Top from './top'
import Sing from './sing'

const Nav: React.FC<boolean>= isAuthenticated => {
 if(!isAuthenticated){
    return(<Router>
               <div>
                  <ul>
                     <li><Link to="/">Домашняя</Link></li>
                     <li><Link to="/random">Рандомное</Link></li>
                     <li><Link to="/top">Топ</Link></li>
                     <li><Link to="/sing">Вход</Link></li>
                  </ul>
            <Switch>     
               <Route path="/random" exact><Random /></Route>
               <Route path="/sing" exact><Sing /></Route>
               <Route path="/top" exact><Top /></Route>
               <Route path="/" exact><Home /></Route>
               <Redirect to="/"/>
            </Switch>
               </div>
            </Router>)
}
   return(<Router>
      <div>
         <ul>
            <li><Link to="/">Домашняя</Link></li>
            <li><Link to="/random">Рандомное</Link></li>
            <li><Link to="/top">Топ</Link></li>
            <li><Link to="/account:id">Аккаунт</Link></li>
         </ul>
   <Switch>     
      <Route path="/random" exact><Random /></Route>
      <Route path="/account" exact><Sing /></Route>
      <Route path="/top" exact><Top /></Route>
      <Route path="/" exact><Home /></Route>
      <Redirect to="/"/>
   </Switch>
      </div>
   </Router>)

}
 

export default Nav;
