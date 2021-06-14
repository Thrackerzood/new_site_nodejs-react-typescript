import React from 'react'
import {GlobalStyle} from './components/style'
import Nav from './components/nav'
import Footer from './components/footer'

const App:React.FC<any> = () =>{
const isAuth:boolean = false
const router = Nav(isAuth)
return (<>
  <GlobalStyle/>
  {router}
  <Footer>

  </Footer>
</>)  
}


export default App;
