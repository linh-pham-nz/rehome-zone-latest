import request from 'superagent'

export function getDbCats() {
  return request.get('/api/v1/cats')
}

export function getCatByName(id) {
  return request.get('/api/v1/cats/' + id)
}

export function postNewCat(data) {
  return request.post('/PostNewCat')
    .send(data)
    .catch(e => { console.log(e) })
}

export function getCatFacts() {
  return request.get('https://raw.githubusercontent.com/vadimdemedes/cat-facts/master/cat-facts.json')
    .catch(e => { console.log(e) })

}


