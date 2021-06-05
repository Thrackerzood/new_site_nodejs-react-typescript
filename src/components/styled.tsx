import styled from 'styled-components'

export const Footer = styled.footer
`
max-width: 100%;
height:400px;
background-color: black;
margin-top: 50px;
`
export const Header = styled.header
`
width: 100%;
margin: 0 0 50px 0;
`
export const Ul = styled.ul
`
max-width: 100%;
display:flex;
align-items: center;
background-color: black;
list-style: none;
a{
   color: white;
   text-decoration: none;
   font-family: "formular","Arial",sans-serif;
   font-size: 16px;
   padding: 20px 15px;
}
li{
   padding: 20px 0;
}
&>li:hover{
   background: rgb(255,255,255,0.1);
}
&>li>a:hover{
   color: gray;
}
`
export const DivGlobal =  styled.div
`
max-width: 100%;
min-height: 600px;
input{
   transition: 0.4s;
   margin: 10px;
   outline: none;
   border: none;
   width: 230px;
   border-bottom: solid 3px gray;
   padding: 10px;
   text-align: center;
   background: #2e2e2e;
}
&>input:focus{
   width: 260px;
   background: white;
}
`
export const AGlobal = styled.a
`
max-width: 100%;
`
export const PGlobalA = styled.p
`
font-family: "formular","Arial",sans-serif;
color: white;
max-width: 100%;
color: black;
&:hover{
   color: white;
}
font-size: 20px;
text-transform: uppercase;
margin: 10px 15px;
cursor: pointer;
`
export const PGlobalD = styled.p
`
font-family: "formular","Arial",sans-serif;
max-width: 100%;
color: white;
text-transform: uppercase;
font-size: 20px;
margin: 10px 15px;
cursor: pointer;
`
export const DivSing = styled.div
`
display:flex;
flex-direction: column;
max-width: 500px;
min-height: 700px;
margin: 0 auto;
display:flex;
justify-content: center;
align-items: center;
background: #212121;
border-radius: 10px;
}
`
export const Button = styled.button
`
padding: 10px 35px;
outline: none;
border: none;
border-radius: 30px;
background: black;
font-size: 14px;
font-family: "formular","Arial",sans-serif;
margin: 15px;
color: white;
cursor: pointer;
font-size: 18px;
&:hover{
   background: rgba(8,8,8,1);
}
`
export const DivFlex = styled.div
`
display: flex;
width: 100%;
justify-content: center;
`
export const ErrorP = styled.p
`
color: red;
`