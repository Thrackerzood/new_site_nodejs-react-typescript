import React, {useState, useEffect} from 'react'
import {Main,SectionHome,DivHome,SectionHomeDiv} from './style'
import {sendRequest}  from './ajax/main'



const Home:React.FC<any> = () =>{
  const [state = {data: []}, setState] = useState<any>({data: []})
  const getResult = async() => {
    let response:any = await sendRequest('POST','http://127.0.0.1:5500/api/home')
    setState({data: response})
  }
  useEffect(()=>{ getResult() }, [])
  const data:any = state.data.map((item:any) => {
    return (<SectionHome>
      <SectionHomeDiv id={item.show_name}>
        <a href={item.show_name} key={item.id} >
          <img src={item.picture_target} alt={item.show_name} key={item.id}/>
          <span><h5>{item.show_name}</h5></span>
        </a>
      </SectionHomeDiv>
      <a href={'#' + item.show_name} key={item.id}>
        <img src={item.pictures} alt={item.show_name} key={item.id}/>
        <span><h5>{item.show_name}</h5></span>
      </a>
    </SectionHome>) 
  })
  console.log(state)
return (<Main>
    <DivHome>
      {data}
    </DivHome>
</Main>)}

export default Home