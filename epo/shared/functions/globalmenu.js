/********************
Global Menu Functions
*********************/

// Toggle global menu with menu button
export function changeMenuStatusHandler() {
  let changeMenuStatus;
  this.props.globalMenuStatus !== 'active' 
  ? changeMenuStatus = 'active'
  : changeMenuStatus = 'disabled'
  this.props.toggleActions.toggleGlobalMenu(changeMenuStatus);
}
// Reset global menu (turn off)
export function resetMenuStatusHandler() {
  this.props.globalMenuStatus == 'active'
  ? this.props.toggleActions.toggleGlobalMenu('disabled')  
  : '';
  this.props.toggleActions.toggleDossierMenu('disabled')
}
// Toggle dossier list
export function dossierClickHandler(e) {
  let changeDossierStatus;
  this.props.currentDossierStatus !== 'active' 
  ? changeDossierStatus = 'active'
  : changeDossierStatus = 'disabled'
  this.props.toggleActions.toggleDossierMenu(changeDossierStatus);
}