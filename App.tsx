import React from 'react';
import Nav from './components/nav'
import {Footer} from './components/styled'
import { createGlobalStyle } from 'styled-components'
import {useAuth} from './hook/authhook'
import { AuthContext } from './context/context';

const Global = createGlobalStyle
`
body{background: #303030;}
main{
  min-height: 600px;
  animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both;
  @keyframes scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}
}
`
const App: React.FC = () => {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = Nav(isAuthenticated)
  return (
    <>
  <AuthContext.Provider value={{token:token,login:login,logout: logout,userId:userId,isAuthenticated}}>
    <Global/>
      {routes}
    <Footer/>
  </AuthContext.Provider>
  </>
  );
}

export default App;
