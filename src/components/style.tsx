import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}
body{
   background: #E0E2E5;
}
`
export const Header = styled.header
`
top: 0;
position: sticky;
z-index: 10;
width: 100%;
height: 100%;
background: #343A40;
@media(max-width: 425px){
   border-bottom: none;
   ul{
      display: flex;
      flex-direction: column;
      align-items: center;
      .target{
         clip-path: none;
         width: auto;
         height: auto;
         background: none;
      }
      li{
         .target{
            clip-path: none;
            width: auto;
            height: auto;
            background: none;
         }
         .active{
            border-bottom: 1px solid;
         }
         a{
            font-size: 14px !important;;
            padding: 0 5px !important;
         }
            padding 5px 5px !important;
      }
      
   }
   .target{
      margin: 0 auto;
      display: flex;
      height: 25px;
      width: 100%;
      li{
         display: none;
      }
   }
}
nav{
   border-bottom: 3px solid rgb(255, 77, 77);
   ul{
      background: #343A40;
      display: flex;
      justify-content: flex-start;
      text-decoration: none;
      list-style: none;
      li{
         padding: 15px 10px;
         a{
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            color: white;
            text-decoration: none;
            padding: 0 10px;
         }
         .active{
            color: rgb(255,77,77);
         }
         :last-child> a{
            padding: 15px 10px;
            border-left: 2px solid grey;
            border-right: 2px solid grey;
         }
      }
   }
}
`
export const Main = styled.main
`
margin: 50px auto;
min-height: 100vh;
max-width: 1200px;
background: #FFFFFF;
`
export const FooterStyle = styled.footer
`
max-width: 100%;
min-height: 100px;
background: #000000;
`
export const DivHome = styled.div
`
display: flex;
align-items: flex-start;
position: relative;
overflow-x: scroll;
overflow-y: hidden;
background: rgb(240, 245, 245);
::-webkit-scrollbar {
   height: 10px;
}
&:active{
   cursor: grabbing;
}
section{
   scroll-snap-align: center;
   user-select: none;
   :hover{
      transform: scale(1.05) translate(1px, 1px);
         p{
            color: rgb(255,77,77);
            :hover{
               color: rgb(51, 102, 255);
            }
         }
   }
img{
   height: calc(100vh / 5);
   margin: 15px;
   border: 6px solid white;
   box-shadow: 5px 5px 5px -5px rgba(77, 77, 77, 0.6);
}
   a{
      text-decoration: none;
      max-width: 300px;
      p{
         color: black;
         padding: 5px;
         font-weight: 600;
         text-align: center;  
         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
         font-family: 'Roboto', sans-serif;
      }
   }
}
`
export const SectionHome = styled.section
`
padding: 25px;
`
export const SectionAuth = styled.section
`
height: 600px;
position: relative;
background: white;
display: flex;
justify-content: center;
flex-direction: column;
.false{
   box-shadow: 0px 0px 0px 2px red;
}
.true{
   box-shadow: 0px 0px 0px 2px green;
}
div{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   @media(max-width: 425px){
      input{
         :focus{
            max-width: 100% !important;
            box-shadow: 0px 0px 0px 2px rgba(0, 98, 255, 0.6);
         }
      }
   }
}
   input{
      width: 240px;
      font-size: 16px;
      padding:  10px;
      border: none;
      outline: none;
      border: 1px solid grey;
      border-radius: 4px;
      margin: 20px 0;
      ::-webkit-input-placeholder {
         text-align: center;
      }
      :focus{
         border: 1px solid black;
         box-shadow: 0px 0px 0px 2px rgba(0, 98, 255, 0.6);
         width: 240px;
      }
   }
   button{
      margin: 20px;
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
      font-family: 'Roboto', sans-serif;
      color: white;
      border-radius: 15px;
      padding: 10px 45px;
      outline: none;
      border: none;
      background: rgb(102, 153, 153);
      transition: .5s;
      :hover{
         background: rgb(71, 107, 107);
      }
   }
}
`