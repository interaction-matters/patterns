/*
 * action types (constants)
 */

export const TOGGLE_SECONDARY_CONTENT = 'TOGGLE_SECONDARY_CONTENT'
export const TOGGLE_GLOBAL_MENU = 'TOGGLE_GLOBAL_MENU'
export const TOGGLE_DOSSIER_MENU = 'TOGGLE_DOSSIER_MENU'

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

export function toggleDossierMenu(status) {
  return {
  	type: TOGGLE_DOSSIER_MENU,
		status
  }
}