import { 
	TOGGLE_GLOBAL_MENU,
	TOGGLE_SECONDARY_CONTENT,
  TOGGLE_DOSSIER_MENU
} from 'actions/actions';

import { combineReducers } from 'redux';

// Import our initial state as a JSON object
const initialState = require("config/config.json");
const apps = require("config/applications.json");
const dossiers = require("config/dossiers.json");

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
// Apps in global navigation
function globalNavAppsReducer(state=apps, action) {
  return state;
}
// Current ossiers in global navigation
function globalNavDossiersReducer(state=dossiers, action) {
  return state;
}
// For toggling the secondary content panel
function secondaryContentReducer (state={secondaryContent: initialState.secondaryContent}, action) {
  switch (action.type) {
  	case 'TOGGLE_SECONDARY_CONTENT':
      return {...state, secondaryContent: action.status}
    default:
      return state
  }
}
// For toggling the global menu
function globalMenuReducer(state={}, action) {
  switch (action.type) {
		case 'TOGGLE_GLOBAL_MENU':
      return {...state, globalMenuStatus: action.status}
    default:
      return state
	}
}
// For toggling the dossier list on global menu
function dossierListReducer(state={ currentDossierList: 'disabled' }, action) {
  switch (action.type) {
    case 'TOGGLE_DOSSIER_MENU':
      return {...state, currentDossierList: action.status}
    default:
      return state
  }
}

const rootReducer = combineReducers({
	nav: navReducer,
 	menu: menuReducer,
 	utils: utilityReducer,
  secondary: secondaryContentReducer,
  globalMenu: globalMenuReducer,
  globalNavApps: globalNavAppsReducer,
  dossiers: globalNavDossiersReducer,
  currentDossiers: dossierListReducer
})

export default rootReducer