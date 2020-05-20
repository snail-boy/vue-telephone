import request from '@/utils/request'

export function verify() {
  return request({
    url: '/login/verify',
    method: 'post'
  })
}

export function login(data) {
  return request({
    url: '/login/userLogin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/login/info',
    method: 'post',
    data: { token }
  })
}

export function logout() {
  return request({
    url: '/login/loginout',
    method: 'post'
  })
}

// 医院名称模糊搜索
export function searchHospital(data) {
  return request({
    url: '/hospital/queryHCode',
    method: 'post',
    data,
    type: 'noLoading'
  })
}

