import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}
body{
   background: #121212;
}
`
export const Header = styled.header
`
position: sticky;
top: 0;
left: 0;
background: black;
ul{
   display:flex;
   margin: 0;
   padding: 0;
}
li{
   font-family: "-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
   list-style: none;
   padding: 25px 0px;
   font-weight: 600;
   :hover{
         font-family: "-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
         text-shadow: -5px 5px 0 gray;
         background: rgb(15,15,15);
   }
}
a{
   font-size: 18px;
   text-decoration: none;
   padding: 21px 20px;
   color: rgb(123,104,208);
   &.active{
      border-bottom: 3px solid white;
      font-family: "-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
      text-shadow: -5px 5px 0 gray;
      background: rgb(15,15,15);
   }
}
`
export const Main = styled.main
`
max-width: 960px;
min-height: 1000px;
margin: 0 auto;
display: flex;
flex-direction: column;
padding: 30px 10px;
background: rgb(10,10,10);
margin-top: 50px;
box-shadow: 0px -5px 5px -5px rgba(74, 32, 182, 0.6) inset;
`
export const FooterStyle = styled.footer
`
max-width: 100%;
min-height: 500px;
background: black;
margin-top: 50px;
`