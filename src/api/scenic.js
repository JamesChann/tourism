import axios from 'axios'

export function getScenic(sceneryId) {
  const url = '/api/getScenic'

  const data = Object.assign({}, {
    req: {
      sceneryId,
      'imageSize': 1
    }
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getCommit(sceneryId, pageIndex) {
  const url = '/api/getCommit'

  const data = Object.assign({}, {
    req: {
      sceneryId,
      pageIndex,
      'pageSize': 20,
      'filterItemList': []
    }
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}