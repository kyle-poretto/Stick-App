export default (state = [], action) => {
  switch (action.type) {
    case 'GET_STICKS_SUCCESS':
    return action.sticks

    case 'CREATE_STICK_SUCCESS':
      return state.concat(action.stick)

    case 'DELETE_STICK_SUCCESS':
      const stick = state.sticks.filter(stick => stick.id !== action.id);
      return  { stick }

    default:
      return state;
  }
}