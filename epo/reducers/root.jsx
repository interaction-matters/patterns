import { 
	TOGGLE_GLOBAL_MENU,
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

function secondaryContentReducer (state = { secondaryContent: initialState.secondaryContent }, action) {
  switch (action.type) {
  	case 'TOGGLE_SECONDARY_CONTENT':
      return {...state, secondaryContent: action.status}
    default:
      return state
  }
}

function globalMenuReducer(state={ globalMenuStatus: 'disabled' }, action) {
  switch (action.type) {
		case 'TOGGLE_GLOBAL_MENU':
      return {...state, globalMenuStatus: action.status}
    default:
      return state
	}
}

const rootReducer = combineReducers({
	nav: navReducer,
 	menu: menuReducer,
 	utils: utilityReducer,
  secondary: secondaryContentReducer,
  globalMenu: globalMenuReducer
})

export default rootReducer