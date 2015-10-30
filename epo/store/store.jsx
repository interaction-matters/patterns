import { createStore } from 'redux';
// Import root reducer to hydrate the store
import rootReducer from 'reducers/root';
// Import our initial state as a JSON object
const initialState = require("config/menu.json");

export default function configureStore() {

	// Create store, taking in our root reducer and
	// initial state from JSON
  const store = createStore(rootReducer, initialState);
  // Some console logs for testing
  console.log("json object is: " + initialState);
  console.log(store.getState());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers/root', () => {
      const nextReducer = require('reducers/root');
      store.replaceReducer(nextReducer);
    });
  }
  
  return store;
}