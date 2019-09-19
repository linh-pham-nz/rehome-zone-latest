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
  console.log("api working")
  return request.get('https://raw.githubusercontent.com/vadimdemedes/cat-facts/master/cat-facts.json')
    .end((err, result) => {
        if (err) {
          res.status(500).send(err.message)
        } else {
          res.json(result.body)
          console.log(result.body)
        }
    })
  
}

