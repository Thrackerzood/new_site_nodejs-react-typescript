import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import Home from '../components/home'
import New from '../components/new'
import Random from '../components/random'
import Auth from '../components/auth'
import Account from '../components/account'
import {Header} from './style'

const Nav:React.FC<any> = (isAuth: {}) =>{
function click(event:any){
   event.target.classList.toggle("target")
}
if(!isAuth){
return (<Router>
<Header>
<nav>
   <ul onClick={click} className="target">
      <li><NavLink to="/" exact>Главная</NavLink></li>
      <li><NavLink to="/new" exact>Новинки</NavLink></li>
      <li><NavLink to="/random" exact>Случайное</NavLink></li>
      <li><NavLink to="/auth" exact>Войти</NavLink></li> 
   </ul>  
</nav>
</Header>
<Switch>
   <Route path="/auth"><Auth/></Route>
   <Route path="/new"><New/></Route>
   <Route path="/random"><Random/></Route>
   <Route path="/"><Home/></Route>
</Switch>
</Router>)     
}
return (<Router>
<Header>
<nav>
   <ul onClick={click} className="target">
      <li><NavLink to="/" exact>Главная</NavLink></li>
      <li><NavLink to="/new" exact>Новинки</NavLink></li>
      <li><NavLink to="/random" exact>Случайное</NavLink></li>
      <li><NavLink to="/account" exact>Аккаунт</NavLink></li>
      <div>
      <li><a href="/">Выйти</a></li>
      </div>
   </ul>
</nav> 
</Header>
<Switch>
   <Route path="/new"><New/></Route>
   <Route path="/random"><Random/></Route>
   <Route path="/account"><Account/></Route>
   <Route path="/"><Home/></Route>
   <Redirect to="/"/>
</Switch>

</Router>)
}

export default Nav;
