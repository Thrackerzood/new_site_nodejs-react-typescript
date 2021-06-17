export function sendRequest(method:string, url:string, body:any = null){
   return fetch(url, {
      method: method,
      headers: {
            'Content-Type': 'application/json'
         },
      body: body,
   }).then(response => response.json())
     .then(result  => result)
}