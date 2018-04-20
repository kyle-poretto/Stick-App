export default (state = [], action) => {
  switch (action.type) {
    case 'GET_STICKS_SUCCESS':
      return action.sticks

    case 'CREATE_STICK_SUCCESS':
      return state.concat(action.stick)

    case 'ADD_LIKE':
      return state.map(stick => stick.id == action.stick.id ? action.stick : stick)
   
    default:
      return state;
  }
}