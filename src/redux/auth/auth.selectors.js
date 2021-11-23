import { createSelector } from 'reselect'

const selectAuth = (state) => state.auth

export const selectPieToken = createSelector([selectAuth], (auth) => auth.pieToken)
