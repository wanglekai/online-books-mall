import { handleActions } from "redux-actions"
import {
  signup, signup_fail, signup_success
} from '../actions/signup'

const initialState = {
  loading: false,
  loaded: false,
  success: false,
  messgae: ''
}

const signupReducer = handleActions({
  [signup]: () => {
    return {
      loading: true,
      loaded: false,
      success: false,
      messgae: ''
    }
  },
  [signup_success]: () => {
    return {
      loading: false,
      loaded: true,
      success: true,
      messgae: ''
    }
  },
  [signup_fail]: (state, action) => {
    return {
      loading: false,
      loaded: true,
      success: false,
      messgae: action.payload.messgae
    }
  }
}, initialState)
export default signupReducer
