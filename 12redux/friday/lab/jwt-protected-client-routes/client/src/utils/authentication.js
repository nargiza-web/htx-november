import axios from 'axios'

export function setAuthenticationHeader(token) {
  if(token){
    // set the default header for the authorization
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }else {
    delete axios.default.headers.common['Authorization']
  }
}