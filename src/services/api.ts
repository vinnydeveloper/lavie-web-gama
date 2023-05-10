import axios from 'axios'

const api = axios.create({
  baseURL:'https://la-vie-n5s7.onrender.com',
  headers:{
    'Content-Type':'application/json'
  }
})


export default api