import { createStore } from 'redux';
import rootReducer from './rootReducer';

const rootStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore;

//create the store and attach any middleware-redux
//Redux DevTools will be able to see all the changes that pass through the Store