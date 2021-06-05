import React, { useContext } from 'react';
import {BrowserRouter as Router, Link, Route, Switch,Redirect} from 'react-router-dom'
import Home from './home'
import Random from './random'
import Top from './top'
import Sing from './sing'
import {Ul, Header} from './styled'
import { AuthContext } from '../context/context';

const Nav: React.FC<any>= isAuthenticated => {
   const auth = useContext(AuthContext)
   const logoutHandler:any = (event:any) =>{
      auth.logout()
   }
 if(!isAuthenticated){
    return(<Router>
               <Header>
                  <Ul>
                     <li><Link to="/">Домашняя</Link></li>
                     <li><Link to="/random">Рандомное</Link></li>
                     <li><Link to="/top">Топ</Link></li>
                     <li><Link to="/auth">Вход</Link></li>
                  </Ul>
               </Header>
            <Switch>     
               <Route path="/random" exact><Random /></Route>
               <Route path="/auth" exact><Sing /></Route>
               <Route path="/top" exact><Top /></Route>
               <Route path="/" exact><Home /></Route>
               <Redirect to="/"/>
            </Switch>
            </Router>)
}
   return(<Router>
      <Header>
         <Ul>
            <li><Link to="/">Домашняя</Link></li>
            <li><Link to="/random">Рандомное</Link></li>
            <li><Link to="/top">Топ</Link></li>
            <li><Link to="/account:id">Аккаунт</Link></li>
            <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
         </Ul>
      </Header>
   <Switch>     
      <Route path="/random" exact><Random /></Route>
      <Route path="/account" exact><Sing /></Route>
      <Route path="/top" exact><Top /></Route>
      <Route path="/" exact><Home /></Route>
      <Redirect to="/"/>
   </Switch>
   </Router>)
}
 

export default Nav;
