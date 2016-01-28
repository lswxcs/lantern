/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 *
 * To add a new reducer, add a file like this to the reducers folder, and
 * add it in the rootReducer.js.
 */

import { DIALOG, OPEN_MENU, LANGUAGE, USER, LANTERN } from '../constants/AppConstants'
import assignToEmpty from '../utils/assign'

const initialState = {
  dialog: {
    open: false,
    name: '',
  },
  openMenu: false,
  language: 'en',
  user: {
    pro: true,
    deadline: 'December 31 2016 23:59:59 GMT+02:00',
  },
  lantern: {
    status: 'on',
  },
}

function homeReducer(state = initialState, action) {
  Object.freeze(state) // Don't mutate state directly, always use assign()!
  switch (action.type) {
  case DIALOG:
    return assignToEmpty(state, { dialog: action.status })
  case OPEN_MENU:
    return assignToEmpty(state, { openMenu: action.status })
  case LANGUAGE:
    return assignToEmpty(state, { language: action.name })
  case USER:
    return assignToEmpty(state, { user: action.obj })
  case LANTERN:
    return assignToEmpty(state, { lantern: action.obj })
  default:
    return state
  }
}

export default homeReducer
