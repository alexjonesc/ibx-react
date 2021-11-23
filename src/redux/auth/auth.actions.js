import AuthTypes from './auth.types'

export const initAuth = () => ({
  type: AuthTypes.AUTH_INIT,
})

export const setPieToken = (pieToken) => ({
  type: AuthTypes.SET_PIE_TOKEN,
  payload: pieToken,
})

export const fetchPieToken = () => ({
  type: AuthTypes.FETCH_PIE_TOKEN,
})

export const fetchPieTokenError = (errorMessage) => ({
  type: AuthTypes.FETCH_PIE_TOKEN_ERROR,
  payload: errorMessage,
})
