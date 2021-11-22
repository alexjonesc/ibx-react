import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { initAssessment } from '../../redux/assessment/assessment.actions'
import {
  selectHasAssessment,
  selectAssessmentId,
  selectAssessmentTitle,
} from '../../redux/assessment/assessment.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import './assessment-page.styles.scss'

const AssessmentView = (props) => {
  const { assessmentId, title } = props
  return (
    <div className="assessment-page">
      <div className="assessment-page__content">
        <div>
          assessmentId: {assessmentId}, Assessment Title: {title}
        </div>
      </div>
    </div>
  )
}

const AssessmentViewWithSpinner = WithSpinner(AssessmentView)

const Assessment = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const isLoading = useSelector(selectHasAssessment)

  const assessmentData = {
    assessmentId: useSelector(selectAssessmentId),
    title: useSelector(selectAssessmentTitle),
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
