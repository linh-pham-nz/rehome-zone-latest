import request from 'superagent'

export const SHOW_CAT_FACT = 'SHOW_CAT_FACT'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receiveFact = (fact) => {
  return {
    type: SHOW_CAT_FACT
  
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    console.log('starting API call')
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        console.log('receiving API call')
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}