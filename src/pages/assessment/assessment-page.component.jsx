import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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

const Assessment = ({ isLoading, initAssessment, ...otherPros }) => {
  const { id } = useParams()
  //const dispatch = useDispatch()

  // initialize assessment
  useEffect(() => {
    initAssessment(id)
  }, [initAssessment, id])

  return (
    <div>
      <AssessmentVIewWithSpinner isLoading={isLoading} {...otherPros} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  id: selectAssessmentId(state),
  title: selectAssessmentTitle(state),
  isLoading: !state.assessment.assessment,
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedFilters: (id) => dispatch(initAssessment(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)
