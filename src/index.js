import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
//import { counter } from "./reducers/counter";

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// store.subscribe(() => {
//   console.log("subsribe", store.getState());
// });

// store.dispatch({ type: "ADD_TRACK", payload: "Smells like spirit" });
// store.dispatch({ type: "ADD_TRACK", payload: { id: 2, name: "Dimond in the sky" } });
