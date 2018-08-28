import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import { counter } from "./reducers/counter";

const initialState = {
  tracks: ["Smells like spirit", "Enter Sandman"],
  playlists: ["My home playlist", "My work playlist"]
};

function playlist(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return {
      ...state,
      tracks: [...state.tracks, action.payload]
    };
  }

  return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// function playlist(state = [], action) {
//   console.log(action);
//   if (action.type === "ADD_TRACK") {
//     return [...state, action.payload];
//   }

//   return state;
// }

// const store = createStore(playlist);

// store.subscribe(() => {
//   console.log("subsribe", store.getState());
// });

// store.dispatch({ type: "ADD_TRACK", payload: "Smells like spirit" });
// store.dispatch({ type: "ADD_TRACK", payload: { id: 2, name: "Dimond in the sky" } });
