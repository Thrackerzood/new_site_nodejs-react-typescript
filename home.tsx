import React, {useState, useEffect} from 'react'
import {Main} from './style'
import {sendRequest}  from './ajax/main'



const Home:React.FC<any> = () =>{
  const [state = {data: []}, setState] = useState<any>({data: []})
  const getResult = async() => {
    let response:any = await sendRequest('POST','http://127.0.0.1:5500/api/home')
    setState({data: response})
  }
  useEffect(()=>{ getResult() }, [])
  const data:any = state.data.map((item:any) => {
    return (<p>{item.show_name}</p>)
  })
  console.log(state)
return (<Main>
    {data}
</Main>)}

export default Home;