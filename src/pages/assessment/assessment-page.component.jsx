import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { initAssessment } from '../../redux/assessment/assessment.actions'
import {
  selectAssessmentTitle,
  selectAssessmentId,
} from '../../redux/assessment/assessment.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import './assessment-page.styles.scss'

const AssessmentView = (props) => {
  const { id, title } = props
  return (
    <div className="assessment-page">
      <div className="assessment-page__content">
        <div>
          ID: {id}, Assessment Title: {title}
        </div>
      </div>
    </div>
  )
}

const AssessmentVIewWithSpinner = WithSpinner(AssessmentView)

const Assessment = (props) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading } = props

  // initialize assessment
  useEffect(() => {
    dispatch(initAssessment(id))
  }, [dispatch, id])

  return (
    <div>
      <AssessmentVIewWithSpinner isLoading={isLoading} {...props} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  id: selectAssessmentId(state),
  title: selectAssessmentTitle(state),
  isLoading: !state.assessment.assessment,
})

export default connect(mapStateToProps)(Assessment)
