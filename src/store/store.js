import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import authReducer from "./reducers/auth";
import userReducer from "./reducers/user";
import sidebarReducer from "./reducers/sidebar";

// redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combining reducers
const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
