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
import { API as PieApi, CONTENT_ITEM } from '../../services/pie/pie-api'
import { Query } from 'react-apollo'

import { ApolloProvider } from 'react-apollo'

import './assessment-page.styles.scss'

const AssessmentView = (props) => {
  const { assessmentId, title, questions } = props

  const test = {
    elements: {
      'pp-pie-element-select-text': '@pie-element/select-text@6.5.8',
    },
    markup: '<pp-pie-element-select-text id="p-00000000"></pp-pie-element-select-text>',
    id: 'p-00000000',
    models: [
      {
        maxSelections: 2,
        rationaleEnabled: false,
        prompt: '<div>Select the VERBS in the following sentence.</div>',
        teacherInstructionsEnabled: false,
        text: 'Please practice using the New Item Bank.',
        element: 'pp-pie-element-select-text',
        feedbackEnabled: false,
        partialScoring: true,
        mode: '',
        id: 'p-00000000',
        scoringType: 'auto',
        promptEnabled: true,
        tokens: [
          {
            text: 'practice',
            end: 15,
            start: 7,
            correct: true,
          },
          {
            start: 16,
            end: 21,
            correct: true,
            text: 'using',
          },
          {
            text: 'the',
            end: 25,
            start: 22,
          },
          {
            text: 'New',
            start: 26,
            end: 29,
          },
          {
            end: 34,
            start: 30,
            text: 'Item',
          },
          {
            text: 'Bank',
            end: 39,
            start: 35,
          },
        ],
        feedback: {
          correct: {
            type: 'default',
            default: 'Correct',
          },
          partial: {
            type: 'default',
            default: 'Nearly',
          },
          incorrect: {
            type: 'default',
            default: 'Incorrect',
          },
        },
        highlightChoices: true,
        studentInstructionsEnabled: false,
      },
    ],
  }

  const onPlayerError = (e) => {
    console.log('XXXXXXXXX ========>', e)
  }

  return (
    <ApolloProvider client={PieApi.getClient()}>
      <div className="assessment-page">
        <div className="assessment-page__content">
          <div>
            Assessment Title: {title} (assessmentId: {assessmentId}),
          </div>
          <div className="assessment-questions">
            {questions.map(({ item, ...question }) => (
              <div className="assessment-questions__question" key={item.itemRevId}>
                <div>Item Type: {item.itemType}</div>
                <div>Id: {item.itemId}</div>
                <div>Revision: {item.itemRevId}</div>
                <div>RemoteId: {item.remoteIdVersioned}</div>
                <div>Weight: {question.weight}</div>
                <div>
                  <pie-player
                    id={`player-${item.itemId}`}
                    config={test}
                    bundleHost="prod"
                    load-complete={onPlayerError}
                    player-error={onPlayerError}
                  ></pie-player>
                  <Query query={CONTENT_ITEM} variables={{ versionedID: item.remoteIdVersioned }}>
                    {({ loading, data }) => {
                      // hack to make player work
                      if (!loading && data && data.contentItem) {
                        setTimeout(() => {
                          const player = document.getElementById(`player-${item.itemId}`)
                          player.config = data.contentItem.config
                        }, 0)
                      }

                      return ''
                    }}
                  </Query>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ApolloProvider>
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
