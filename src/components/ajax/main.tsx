const headers = {
   'Content-Type': 'application/json'
}
export function sendRequest(method:string, url:string, body = null){
   return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
   }).then(response => response.json())
     .then(result  => result)
}