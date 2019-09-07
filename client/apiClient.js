import request from 'superagent'

export function getDbCats() {
  return request.get('/api/v1/cats')
}
