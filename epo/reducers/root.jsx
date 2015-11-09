import { 
	ADD_MENU_ITEM,
	TOGGLE_SECONDARY_CONTENT
} from 'actions/actions';

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
function utilityReducer(state=initialState.footerToolbarItems, action) {
  return state;
}

function secondaryContentReducer (state = { secondaryContent: '' }, action) {
  switch (action.type) {
  	case 'TOGGLE_SECONDARY_CONTENT':
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
	nav: navReducer,
 	menu: menuReducer,
 	utils: utilityReducer,
 	addItems: addMenuItemReducer,
  secondary: secondaryContentReducer
})

export default rootReducer