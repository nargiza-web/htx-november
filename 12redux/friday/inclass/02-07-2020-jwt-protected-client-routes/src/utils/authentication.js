
import axios from 'axios'

export function setAuthenticationHeader(token) {

    if(token) {
        // set the default authorization header for axios 
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }

}