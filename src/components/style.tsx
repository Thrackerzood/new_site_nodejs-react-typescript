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
z-index: 10000;
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
export const DivHome = styled.div
`
display: grid; 
grid-template-columns: 1fr 1fr 1fr 1fr; 
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
max-width: 100%;
max-height: 100%;
position: relative;
`
export const SectionHome = styled.section
`
width: auto;
height: 300px;
text-align: center;
margin: auto;
display: flex;
flex-direction: row;
align-items: center;
a{
   max-width: 100%;
   color: white;
   text-decoration: none;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: 0.4s;
      :hover{
         transform: scale(1.1) translate(-5px, -5px);
         span{
               @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
               font-family: 'Roboto', sans-serif;
               font-weight: 600;
               position: absolute;
               padding: 10px;
               background: rgb(249,249,249,0.8);
               display: block;
               color black;
               animation: focus-in-expand 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
               text-align: center;
         }
         @keyframes focus-in-expand {
            0% {
              letter-spacing: -0.5em;
                      filter: blur(2px);
                      height: 0;
                      border-radius: 50%;
              opacity: 0;
            }
            100% {
                      filter: blur(0px);
                      height: calc(100% - 20px);
                      width: calc(100% - 20px);
              opacity: 1;
            }
          }
   }
   span{
      display: none;
   }
}
img{
   max-width: 250px;
   max-height: 270px;
      :hover{
         box-shadow: 4px 4px 8px 0px rgba(77, 77, 77, 0.2);
   }
}

}
`
export const SectionHomeDiv = styled.section
`
display: none;
:target{
   position: absolute;
   top: 0;
   left: 0;
   display: block;
   img{
      max-width: 500px;
   }
   
}
`