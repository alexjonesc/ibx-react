import AuthType from './auth.types'

const INITIAL_STATE = {
  pieToken: null,
}

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AuthType.SET_PIE_TOKEN:
      return {
        ...state,
        pieToken: payload,
      }
    case AuthType.AUTH_INIT:
    default:
      return state
  }
}

export default authReducer
