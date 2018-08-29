export const selectClient = client => {
  console.log(client.general.firstName);
  return {
    type: "CLIENT_SELECTED",
    payload: client
  };
};

// const mapDispatchToProps = dispatch => ({
//   onAddPlaylist: playlistName => {
//     dispatch({ type: "ADD_PLAYLIST", payload: playlistName });
//   }
// });
