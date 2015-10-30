// Reducer

export default function rootReducer(state, action) {
  console.log("reducer: " + state);
  console.log("init state menu item 1 link: " + state.toolbarItems[0].target);
  return state;
}