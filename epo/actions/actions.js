/*
 * action types (constants)
 */

export const TOGGLE_SECONDARY_CONTENT = 'TOGGLE_SECONDARY_CONTENT'

export const TOGGLE_GLOBAL_MENU = 'TOGGLE_GLOBAL_MENU'

/*
 * action creators
 */

export function toggleSecondaryContent(status) {
  return {
    type: TOGGLE_SECONDARY_CONTENT,
    status
  }
}

export function toggleGlobalMenu(status) {
  return {
  	type: TOGGLE_GLOBAL_MENU,
		status
  }
}