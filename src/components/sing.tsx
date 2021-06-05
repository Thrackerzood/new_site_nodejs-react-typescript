import React, {useState,useContext} from 'react';
import {DivGlobal,DivSing,Button,PGlobalA,PGlobalD,DivFlex,ErrorP} from "./styled"
import {Http} from '../hook/HTTP'
import { AuthContext } from '../context/context';


const Sing: React.FC = () => {
  const auth = useContext(AuthContext)
  const {loading,error,request} = Http()
  const [form, setForm] = useState({email: '', password: '',})

  const changeHandler:any = (event:any) =>{
    setForm({ ...form, [event.target.name]: event.target.value})
  }
  const registerHandler:any = async () =>{
    try{
      const data = await request('http://localhost:5000/api/auth/register ','POST', {...form})
      console.log('DATA: ', data)
    }catch(e){
      throw e
    }
  }
  const loginHandler:any = async () =>{
    try{
      const data = await request('http://localhost:5000/api/auth/login ','POST', {...form})
      auth.login(data.token, data.login)
    }catch(e){
      throw e
    }
  }
  const [count, setCount] = useState(0)
if(count > 1){
return (
      <main>
        <DivGlobal>
          <DivSing>
            <DivFlex>
              <ErrorP></ErrorP>
            <PGlobalD>Вход</PGlobalD><PGlobalA onClick={()=> setCount(count - 1)}>Регистрация</PGlobalA>
            </DivFlex>
              <input  placeholder="email" name="email" type="email" required onChange={changeHandler}/>
              <input placeholder="password" name="password" type="password" required onChange={changeHandler}/>
              <Button onClick={loginHandler} disabled={loading}>Вход</Button>
          </DivSing>
        </DivGlobal>
      </main>
  )  
}
return (
  <main>
  <DivGlobal>
    <DivSing>
      <DivFlex>
      <ErrorP></ErrorP>
      <PGlobalA onClick={()=> setCount(count + 1)}>Вход</PGlobalA><PGlobalD>Регистрация</PGlobalD>
      </DivFlex>
        <input  placeholder="login" name="login" type="login" required onChange={changeHandler}/>
        <input  placeholder="email" name="email" type="email" required onChange={changeHandler}/>
        <input placeholder="password" name="password" type="password" required onChange={changeHandler}/>
        <input placeholder="password" name="confirm" type="password" required onChange={changeHandler}/>
        <Button onClick={registerHandler} disabled={loading}>Регистрация</Button>
    </DivSing>
  </DivGlobal>
</main>
)

}

export default Sing;