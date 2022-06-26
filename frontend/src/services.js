import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000"

export const getHistory = () => {
  axios.get(`${baseUrl}/api/history`)
}

export const addHistory = (data) => {
  axios.put(`${baseUrl}/api/history`, JSON.stringify(data))
}
