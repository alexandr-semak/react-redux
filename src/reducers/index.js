import { combineReducers } from "redux";
import playlists from "./playlists";
import clientsList from "./clients";
import clientDetails from "./clientDetails";

export default combineReducers({
  playlists,
  clients: clientsList,
  clientDetails
});
