import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import sticksReducer from './components/reducers/sticksReducer'
import sticksFormData from './components/reducers/sticksFormData'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  sticks: sticksReducer,
  sticksFormData: sticksFormData
})
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)