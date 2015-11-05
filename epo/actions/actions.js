/*
 * action types (constants)
 */

export const TOGGLE_SECONDARY_CONTENT_ON = 'TOGGLE_SECONDARY_CONTENT_ON'
export const TOGGLE_SECONDARY_CONTENT_OFF = 'TOGGLE_SECONDARY_CONTENT_OFF'
export const ADD_MENU_ITEM = 'ADD_MENU_ITEM'

/*
 * action creators
 */

export function toggleSecondaryContentOn(status) {
  return {
  	type: TOGGLE_SECONDARY_CONTENT_ON,
  	status: 'active'
  }
}

export function toggleSecondaryContentOff(status) {
  return {
  	type: TOGGLE_SECONDARY_CONTENT_OFF,
  	status: 'disabled'
  }
}

export function addMenuItem(target, icon) {
  return {
  	type: ADD_MENU_ITEM,
  	target,
  	icon
  }
}