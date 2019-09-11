import request from 'superagent'

export function getDbCats() {
  return request.get('/api/v1/cats')
}

export function getCatByName(id) {
  // console.log("apiClient", id)
  return request.get('/api/v1/cats/' + id)
}

export function postNewCat(data) {
  // console.log("apiClient", data)
  return request.post('/PostNewCat')
    .send(data)
    .catch(e => { console.log(e) })
}
