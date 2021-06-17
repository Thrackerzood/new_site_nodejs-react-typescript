import React, { useState } from 'react'
import { Main, SectionAuth } from './style'
import { regex,login,email } from './validationForm/validation'
import { useHttp } from './ajax/http'

const Auth:React.FC = () =>{
const {loading,error,request} = useHttp()
const [form, setForm] = useState({password: '', repeat: ''})
const changeHandler = (event:any) => setForm({...form, [event.target.name]: event.target.value})

let passwords:boolean = regex(form)
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
    const data = await request('http://localhost:5500/api/auth/register ','POST', {...form})
    console.log('DATA: ', data)
  }catch(e){
    throw e
  }
}
return(<Main>
          <SectionAuth>
            <div>
              <input type="login" name="login" placeholder="login" onKeyUp={login} onChange={changeHandler} required/>
              <input type="email" name="email" placeholder="email" onKeyUp={email} onChange={changeHandler} required/>
              <input type="password" name="password" placeholder="password" onKeyUp={checkPassword} onChange={changeHandler} required className="password"/>
              <input type="password" name="repeat" placeholder="password" onKeyUp={checkPassword} onChange={changeHandler} required className="password"/>
              <button type="submit" onClick={registerHandler}>Отправить</button>
            </div>
          </SectionAuth>
      </Main>)}
export default Auth;