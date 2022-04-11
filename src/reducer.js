export const initialState = {
  user: null,
  playlists: [],
  savedPlaylists: [],
  playing: false,
  item: null,
  // remove after finished developing
  // token: 'BQBp3ZMYt6vsUJTKsq2HM-ETwvvSLSYW5wUeD6DXjRKAHARKpu4NB82V4_OeSnALeqfQrtx-dF0naTDIQ7W_4HUpmI_daG9Mqq4qz3aq2o3RxyXGUAME4WNLscGrnAJ_pXXtIpzqgatbu9yoAHY5MNkbDqEEbGD4vg',
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    case 'SET_SAVED_PLAYLISTS':
      return {
        ...state,
        savedPlaylists: action.savedPlaylists
      }
    default: 
      return state;
  }
};

export default reducer