import axios from 'axios'

export const getHistory = () => {
  axios.get(`/api/history`)
}

export const addHistory = (data) => {
  axios.post(`/api/history`, JSON.stringify(data))
}
