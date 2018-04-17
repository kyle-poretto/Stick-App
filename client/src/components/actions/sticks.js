//Action Creators
 import { resetStickForm } from './stickForm'

const setSticks = sticks => {
  return {
    type: 'GET_STICKS_SUCCESS',
    sticks
  }
}

const addStick = stick => {
  return {
    type: 'CREATE_SURFBOARD_SUCCESS',
    stick
  }
}

const dumpStick = stick => {
  return {
    type: 'DELETE_STICK_SUCCESS',
    stick
  }
}

//Async Actions
 export const fetchSticks = () => {
 return dispatch => {
    return fetch('http://localhost:3001/api/sticks')
    .then(response => response.json())
    .then(sticks => dispatch(setSticks(sticks)))
    .catch(error => console.log(error))
  }
}

export const createStick = stick => {
  return dispatch => {
    return fetch('http://localhost:3001/api/sticks', {
      method: "POST",
      headers: {  
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ stick: stick })
    })
    .then(response => response.json())
    .then(stick => {
      dispatch(addStick(stick))
      dispatch(resetStickForm())
    })
    .catch(error => console.log(error))
  }
} 

// export const deleteStick = stick => {
//   return dispatch => {
//     return fetch("http://localhost:3001/api/:id", {
//       method: "DELETE",
//       headers: {  
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(stick => {
//       dispatch(dumpStick(stick))
//     })
//     .catch(error => console.log(error))
//   }
// } 

