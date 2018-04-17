//action creators

export const updateSticksFormData = sticksFormData => {
  return {
    type: 'UPDATED_DATA',
    sticksFormData
  }
}

export const resetStickForm = () => {
  return {
    type: 'RESET_STICK_FORM'
  }
}
