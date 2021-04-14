const initialState = {
  users: []
}

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case 'LOAD_USERS':
      return {
        users: action.payload
      }
    case 'DELETE_USER':
      return {
        users: action.payload.id
      }
    default:
      return state
  }
}
