import { createSelector } from 'reselect'

const selectAssessmentState = (state) => state.assessment

const selectAssessment = createSelector([selectAssessmentState], (assessmentState) => {
  return assessmentState.assessment ? assessmentState.assessment : {}
})

export const selectAssessmentId = createSelector(
  [selectAssessment],
  ({ assessmentId }) => assessmentId
)

export const selectAssessmentTitle = createSelector([selectAssessment], ({ title }) => title)
