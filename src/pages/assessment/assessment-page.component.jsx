import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { initAssessment } from '../../redux/assessment/assessment.actions'
import {
  selectHasAssessment,
  selectAssessmentId,
  selectAssessmentTitle,
  selectAssessmentQuestions,
} from '../../redux/assessment/assessment.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import './assessment-page.styles.scss'

const AssessmentView = (props) => {
  const { assessmentId, title, questions } = props

  return (
    <div className="assessment-page">
      <div className="assessment-page__content">
        <div>
          Assessment Title: {title} (assessmentId: {assessmentId}),
        </div>
        <div class="assessment-questions">
          {questions.map(({ item, ...question }) => (
            <div className="assessment-questions__question" key={item.itemRevId}>
              <div>Item Type: {item.itemType}</div>
              <div>Id: {item.itemId}</div>
              <div>Revision: {item.itemTypeId}</div>
              <div>RemoteId: {item.remoteVersionedId}</div>
              <div>Weight: {question.weight}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const AssessmentViewWithSpinner = WithSpinner(AssessmentView)

const Assessment = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const isLoading = !useSelector(selectHasAssessment)

  const assessmentData = {
    assessmentId: useSelector(selectAssessmentId),
    title: useSelector(selectAssessmentTitle),
    questions: useSelector(selectAssessmentQuestions),
  }

  // initialize assessment
  useEffect(() => {
    dispatch(initAssessment(id))
  }, [dispatch, id])

  return (
    <div>
      <AssessmentViewWithSpinner isLoading={isLoading} {...assessmentData} />
    </div>
  )
}

export default Assessment
