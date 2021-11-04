// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'
import axios from 'axios'

const config = useJwt.jwtConfig

// ** Handle User Login
export const handleLogin = data => {

  return dispatch => {
    dispatch({
      type: 'LOGIN',
      data,
      config,
      [config.storageTokenKeyName]: data[config.storageTokenKeyName],
      [config.storageRefreshTokenKeyName]: data[config.storageRefreshTokenKeyName]
    })

    // ** Add to user, accessToken & refreshToken to localStorage
    localStorage.setItem('user', JSON.stringify(data))
    localStorage.setItem(config.storageTokenKeyName, JSON.stringify(data.accessToken))
    localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(data.refreshToken))
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return dispatch => {
    dispatch({ type: 'LOGOUT', [config.storageTokenKeyName]: null, [config.storageRefreshTokenKeyName]: null })

    // ** Remove user, accessToken & refreshToken from localStorage
    const logout = async () => {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'user'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/logout`
      const token = localStorage.getItem('token')
    
      axios.get(endPoint,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        localStorage.clear();
      }).catch(err => {
        localStorage.clear();
      })
  
    }
    logout()
  }
}
