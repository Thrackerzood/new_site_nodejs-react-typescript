export function regex(form:any){
   if((form.password === form.repeat) && (form.password && form.repeat) !== '' && (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(form.password))){
      return true
   }
   return false
}

export function regexAllCheck(form:any){
  return new Promise((resolve,reject)=>{
    if((form.password === form.repeat)
      && (form.password && form.repeat) !== ''
      && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(form.password)
      && /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(form.login)
      && /\S+@\S+\.\S+/.test(form.email)){
      resolve(true)
      }
      resolve(false)
  })
}

export let login = (event:any) => {
   if(/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(event.target.value)){
     event.target.classList.remove('false')
     event.target.classList.add('true')
     return true
   }
     event.target.classList.remove('true')
     event.target.classList.add('false')
     return false
}

export let email = (event:any) => {
   if(/\S+@\S+\.\S+/.test(event.target.value)){
     event.target.classList.remove('false')
     event.target.classList.add('true')
     return true
   }
     event.target.classList.remove('true')
     event.target.classList.add('false')
     return false
}