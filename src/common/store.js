import { createStore, compose } from "redux"
import { rootReducer } from "./reducers/rootReducer"


/**
 * If Redux Dev Tools is installed then using it or else using Redux compose
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());