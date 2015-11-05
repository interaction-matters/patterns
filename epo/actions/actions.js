/*
 * action types (constants)
 */

export const TOGGLE_SECONDARY_CONTENT = 'TOGGLE_SECONDARY_CONTENT'

export const ADD_MENU_ITEM = 'ADD_MENU_ITEM'

/*
 * action creators
 */

export function toggleSecondaryContent(status) {
  return {
    type: TOGGLE_SECONDARY_CONTENT,
    status
  }
}

export function addMenuItem(target, icon) {
  return {
  	type: ADD_MENU_ITEM,
  	target,
  	icon
  }
}