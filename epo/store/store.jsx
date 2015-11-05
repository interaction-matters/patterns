import { createStore } from 'redux';
// Import root reducer to hydrate the store
import rootReducer from 'reducers/root';

export default function configureStore() {

	// Create store, taking in our root reducer and
	// initial state from JSON
  const store = createStore(rootReducer);
  // Some console logs for testing
  console.log("json object is: " + store.getState());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers – copied from
    // https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js
    module.hot.accept('reducers/root', () => {
      const nextReducer = require('reducers/root');
      store.replaceReducer(nextReducer);
    });
  }
  
  return store;
}