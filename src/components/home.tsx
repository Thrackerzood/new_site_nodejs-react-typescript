import React, {useState, useEffect} from 'react'
import {Main,SectionHome,DivHome} from './style'
import {sendRequest}  from './ajax/main'



const Home:React.FC<any> = () =>{
  const [state = {data: []}, setState] = useState<any>({data: []})
  //slider
  let isDown:boolean = false
  let startX:number
  let scrollLeft:number
  let slider:any = document.querySelector('.div')
  function mouseDown(event:any){
    isDown = true
    slider.classList.add('active')
    startX = event.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  }
  function mouseLeave(){
    isDown = false
    slider.classList.remove('active')
  }
  function mouseUp(){
    isDown = false
    slider.classList.remove('active')
  }
  function mouseMove(event:any){
    if (!isDown) return
    event.preventDefault()
    const x = event.pageX - slider.offsetLeft
    const walk = (x - startX)
    slider.scrollLeft = scrollLeft - walk
  }
  //
  const getResult = async() => {
    let response:any = await sendRequest('POST','http://127.0.0.1:5500/api/home')
    setState({data: response})
  }
  useEffect(()=>{ getResult() }, [])
  const data:any = state.data.map((item:any) => {
    return (<SectionHome key={item.id}>
        <img src={item.pictures} alt={item.show_name} key={item.pictures}/>
        <a href={item.show_name} key={item.show_name}><p key={item.id}>{item.show_name}</p></a>
    </SectionHome>)
  })
return (<Main>
    <DivHome className="div" onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove}>
        {data}
    </DivHome>
</Main>)}

export default Home