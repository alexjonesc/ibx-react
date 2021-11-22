import { createSelector } from 'reselect'

const selectAssessmentState = (state) => state.assessment

export const selectHasAssessment = createSelector([selectAssessmentState], (assessmentState) =>
  Boolean(assessmentState.assessment)
)

const selectAssessment = createSelector(
  [selectHasAssessment, selectAssessmentState],
  (hasAsmt, asmtState) => (hasAsmt ? asmtState.assessment : {})
)

export const selectAssessmentId = createSelector(
  [selectAssessment],
  ({ assessmentId }) => assessmentId
)

export const selectAssessmentTitle = createSelector([selectAssessment], ({ title }) => title)

export const selectAssessmentQuestions = createSelector(
  [selectAssessmentState],
  (asmtState) => asmtState.questions
)
