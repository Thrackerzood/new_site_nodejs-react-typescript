import {createContext} from 'react'

function noop(...arg:any) {return [...arg]}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: ()=>{localStorage.removeItem('userData')},
  isAuthenticated: false
})