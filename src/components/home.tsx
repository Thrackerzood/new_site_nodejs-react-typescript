import React, {useState, useEffect} from 'react'
import {Main,SectionHome,DivHome,Data2} from './style'
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
  if (!isDown) return;
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




function useOnScreen(options:any){
  const ref:any = React.useRef()
  const[visible, setVisible] = React.useState(false)
useEffect(()=>{
  const observer = new IntersectionObserver(([entry])=>{
  setVisible(entry.isIntersecting)
}, options)

  if(ref.current){
    observer.observe(ref.current)
  }

  return ()=>{
      if (ref.current){
        observer.unobserve(ref.current)
      }
    } 
  },  [ref, options]) 
  return [ref, visible]
}
const [ref, visible] = useOnScreen({threshold: '0.2',rootMargin: "0px 0px"})
console.log(visible,ref)
const data:any = state.data.map((item:any) => {
return (<SectionHome key={item.id}>
      ​<picture >
          <img src={item.pictures} alt={item.show_name} key={item.pictures}/>
      </picture>
      <a href={item.show_name} key={item.show_name}><p key={item.id}>{item.show_name}</p></a>
  </SectionHome>)
})
const data2:any = state.data.map((item:any) => {
  return(
    <div>
      <a href={item.show_name} key={item.show_name}>
        ​<picture>
        {visible ? <img src={item.pictures} alt={item.show_name} key={item.pictures}/> : <section key={item.show_name}></section>}
        </picture>
      <p key={item.id}>{item.show_name}</p></a>
    </div>)
  })
return(<Main>
  <p>AnimeGO — смотреть аниме онлайн бесплатно. Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. Эти ленты любят за яркий сюжет, 
  оригинальную рисовку и неизменный накал эмоций.Многие поклонники любят смотреть аниме онлайн,
  однако для этого часто приходится пользоваться несколькими источниками, поскольку ни один из них нельзя назвать универсальным. 
  Но у нас есть отличная новость для любителей аниме! Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме.
  Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.
  Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.</p>
  <div>
  <p>Аниме весеннего сезона</p>
    <DivHome className="div" onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove}>
        {data}
    </DivHome>
    <Data2 ref={ref}>
      {data2}
    </Data2>
    
  </div>
</Main>)}

export default Home