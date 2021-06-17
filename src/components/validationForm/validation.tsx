export function regex(form:any){
   if((form.password === form.repeat) && (form.password && form.repeat) !== '' && (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(form.password))){
      return true
   }
   return false
}
export let login = (event:any) => {
   if(/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(event.target.value)){
     event.target.classList.remove('false')
     event.target.classList.add('true')
     return event.target.value
   }
   if(!/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(event.target.value)){
     event.target.classList.remove('true')
     event.target.classList.add('false')
   }
}
 export let email = (event:any) => {
   if(/\S+@\S+\.\S+/.test(event.target.value)){
     event.target.classList.remove('false')
     event.target.classList.add('true')
     return event.target.value
   }
   if(!/\S+@\S+\.\S+/.test(event.target.value)){
     event.target.classList.remove('true')
     event.target.classList.add('false')
   }
}