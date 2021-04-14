const initialState = {
  users: [],
  pages: 0,
  activePage: 1
}

export default function index(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      return {
        ...state,
        users: action.payload,
        pages: Math.ceil(action.payload.length / 5),
      }
    case 'CREATE_USER':
      const usersArrAfterAdd = [...state.users, action.payload]
      return {
        ...state,
        users: usersArrAfterAdd,
        pages: Math.ceil(usersArrAfterAdd.length / 5),
      }
    case 'DELETE_USER':
      const usersArrAfterDelete = [...state.users].filter(el => el.id !== action.payload)
      return {
        ...state,
        users: usersArrAfterDelete,
        pages: Math.ceil(usersArrAfterDelete.length / 5),
      }
    case 'CHANGE_USER':
      const userID = [...state.users].findIndex(user => user.id === action.payload.id)
      state.users[userID] = action.payload
      return {
        ...state,
        users: [...state.users],
        pages: Math.ceil([...state.users].length / 5),
      }
    case 'CHANGE_PAGE':
      return {
        ...state,
        activePage: action.payload,
      }
    default:
      return state
  }
}

