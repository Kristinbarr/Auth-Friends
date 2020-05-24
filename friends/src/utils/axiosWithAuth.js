import axios from 'axios'

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  // creates a new instance of axios
  // passing in a config object, this one is headers
  // any api call made with axiosWithAuth attaches header w token
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token
    }
  })
}

export default axiosWithAuth