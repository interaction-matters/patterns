import { TOGGLE_SECONDARY_CONTENT_ON, TOGGLE_SECONDARY_CONTENT_OFF, ADD_MENU_ITEM} from 'actions/actions';
import { combineReducers } from 'redux';

// Import our initial state as a JSON object
const initialState = require("config/config.json");

// Sets the 'toolbar' icons in main nav
function navReducer(state=initialState.toolbarItems, action) {
  return state;
}
// Menu items in office actions
function menuReducer(state=initialState.itemsInMenu, action) {
  return state;
}
// Sets the 'utility' icons in main nav
function utlityReducer(state=initialState.footerToolbarItems, action) {
  return state;
}

function secondaryContentReducer (state = { secondaryContent: '' }, action) {
  switch (action.type) {
    case 'TOGGLE_SECONDARY_CONTENT_ON':
      return {...state, secondaryContent: action.status}
    case 'TOGGLE_SECONDARY_CONTENT_OFF':
      return {...state, secondaryContent: action.status}
    default:
      return state
  }
}

function addMenuItemReducer(state=initialState.toolbarItems, action) {
  switch (action.type) {
		default:
      return state
	}
}

const rootReducer = combineReducers({
	navReducer,
 	menuReducer,
 	utlityReducer,
 	addMenuItemReducer,
  secondaryContentReducer
})

export default rootReducer