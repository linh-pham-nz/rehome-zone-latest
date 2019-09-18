import {SHOW_CAT_FACT} from '../actions'

function catFactReducer (state = '', action) {
    switch (action.type) {
      case SHOW_CAT_FACT:
        return state
  
      default:
        return state
    }
}

export default catFactReducer