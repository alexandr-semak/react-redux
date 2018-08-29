const initialState = {
  tracks: ["Smells like spirit", "Enter Sandman"],
  playlists: ["My home playlist", "My work playlist"]
};

export default function playlist(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return {
      ...state,
      tracks: [...state.tracks, action.payload]
    };
  } else if (action.type === "ADD_PLAYLIST") {
    return {
      ...state,
      playlists: [...state.playlists, action.payload]
    };
  }

  return state;
}
