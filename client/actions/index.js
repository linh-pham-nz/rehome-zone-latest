import { getCatFacts } from '../apiClient'

export const SHOW_CAT_FACT = 'SHOW_CAT_FACT'
export const SHOW_ERROR = 'SHOW_ERROR'

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
    return getCatFacts()
      .then(res => {
        let allFacts = JSON.parse(res.text)
        let randomFact = allFacts[Math.floor(Math.random() * allFacts.length)]
        dispatch(receiveFact(randomFact))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}