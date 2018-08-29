import { combineReducers } from "redux";
import playlists from "./playlists";
import clientsList from "./clients";

export default combineReducers({
  playlists,
  clients: clientsList
});
