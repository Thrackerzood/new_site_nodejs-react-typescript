import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth:any = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)

  const login:any = useCallback((jwtToken:any, id:any) => {
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken
    }))
  }, [])

  const logout:any = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) || '{}')

    if (data && data.token) {
      login(data.token, data.userId)
    }
    setReady(true)
  }, [login])


  return { login, logout, token, userId, ready }
}