import React, { useState } from 'react'
import { Main, SectionAuth , SectionSing } from './style'
import { regexAllCheck, regex,login,email } from './validationForm/validation'
import { useHttp } from './ajax/http'

const Auth:React.FC = () =>{
const {loading,error,request} = useHttp()
const [formR, setFormR] = useState({password: '', repeat: '', login: '', email: ''})
const [formL, setFormL] = useState({password_singUp: '', email_singUp: ''})
const changeHandlerR = (event:any) => {
  return setFormR({...formR, [event.target.name]: event.target.value})
}
const changeHandlerL = (event:any) => {
  return setFormL({...formL, [event.target.name]: event.target.value})
}
let passwords:boolean = regex(formR)
regexAllCheck(formR).then(allCheck => {
  let button:any = document.querySelector('.buttonCheck')
  if(allCheck === true){
    button.disabled = false
  }
  if(allCheck === false){
    button.disabled = true
  }
})
document.body.addEventListener('load', checkPassword)
function checkPassword(){
  let passwordForm = document.querySelectorAll('.password')
  if(!!passwords === true){
    passwordForm[0].classList.remove('false')
    passwordForm[0].classList.add('true')
    passwordForm[1].classList.remove('false')
    passwordForm[1].classList.add('true')
  }
  if(!!passwords === false){
    passwordForm[0].classList.remove('true')
    passwordForm[0].classList.add('false')
    passwordForm[1].classList.remove('true')
    passwordForm[1].classList.add('false')
  }
}

const registerHandler:any = async () =>{
  try{
    const data = await request('http://localhost:5500/api/auth/register ','POST', {...formR})
    console.log('DATA: ', data)
  }catch(e){
    throw e
  }
}
const loginHandler:any = async () =>{
  try{
    const data = await request('http://localhost:5500/api/auth/login ','POST', {...formL})
    console.log('DATA: ', data)
  }catch(e){
    throw e
  }
}

let [count, setCount] = useState(0)

if(count === 0){
 return(<Main>
          <SectionAuth>
            <section>
              <p onClick={() => setCount(count + 1)}>Вход</p>
              <p className="active">Регистрация</p>
            </section>
            <div>
              <input type="login" name="login" placeholder="login" onKeyUp={login} onChange={changeHandlerR} required/>
              <input type="email" name="email" placeholder="email" onKeyUp={email} onChange={changeHandlerR} required/>
              <input type="password" name="password" placeholder="password" onKeyUp={checkPassword} onChange={changeHandlerR} required className="password"/>
              <input type="password" name="repeat" placeholder="password" onKeyUp={checkPassword} onChange={changeHandlerR} required className="password"/>
              <button type="submit" onClick={registerHandler} className="buttonCheck">Отправить</button>
            </div>
          </SectionAuth>
</Main>) 
  }
return(<Main>
  <SectionSing>
    <section>
        <p className="active">Вход</p>
        <p onClick={() => setCount(count - 1)}>Регистрация</p>
    </section>
    <div className="buttonCheck">
      <input type="email" name="email_singUp" placeholder="email" onChange={changeHandlerL} required/>
      <input type="password" name="password_singUp" placeholder="password" onChange={changeHandlerL} required/>
      <button type="submit" onClick={loginHandler}>Отправить</button>
    </div>
  </SectionSing>
</Main>)
}

export default Auth;