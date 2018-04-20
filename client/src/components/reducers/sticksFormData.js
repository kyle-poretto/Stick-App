const initialState = {
  content: '',
  tag: '',
  likes: 0
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.sticksFormData;

    case 'RESET_STICK_FORM':
      return initialState;

    default:
      return state;
  }
}