import request from 'superagent'
import { getCatFacts } from '../apiClient'

export const SHOW_CAT_FACT = 'SHOW_CAT_FACT'
// export const RECEIVE_FACT = 'RECEIVE_FACT'

export const receiveFact = (randomFact) => {
  return {
    type: SHOW_CAT_FACT,
    randomFact: randomFact
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchFact () {
  return (dispatch) => {
    getCatFacts()
      .then(res => {
        console.log('receiving API call')
        // dispatch(receiveFact(JSON.parse(res.text)))
        let allFacts = JSON.parse(res.text)
        let randomFact = allFacts[Math.floor(Math.random() * allFacts.length)]
        dispatch(receiveFact(randomFact))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}