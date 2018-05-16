import axios from 'axios'

axios.interceptors.response.use((res) => {
  if (!res.data) {
    return Promise.reject(res)
  }
  return res.data;
}, (err) => {
  return Promise.reject(err);
})

let uid = window.localStorage.getItem('uid')

function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    })
      .catch(err => {
        reject(err)
      })
  })
}

export function loginPhone(phone, password) {
  const url = '/login/cellphone'
  let data = {
    phone: phone,
    password: password
  }
  return get(url, {
    params: data
  })
}

export function refresh() {
  const url = '/login/refresh'
  return get(url)
}

export function signin() {
  const url = '/daily_signin'
  return get(url)
}

export function getPlaylist() {
  const url = '/user/playlist'
  let data = {
    uid
  }
  return get(url, {
    params: data
  })
}

export function getUserInfo() {
  const url = '/user/detail'
  let data = {
    uid
  }
  return get(url, {
    params: data
  })
}
