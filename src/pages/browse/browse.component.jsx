import React from 'react'
import './browse.styles.scss'
import API from '../../utils/API'

// const BrowsePage = () => {
//   const title = 'Browse'

//   return (
//     <div className="browse-page">
//       <h2 className="title">{title}</h2>
//     </div>
//   )
// }

class BrowsePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Browse',
      name: null,
    }
  }

  render() {
    const { title, name } = this.state

    return (
      <div className="browse-page">
        <h2 className="title">{title}</h2>
        <div>{name}</div>
      </div>
    )
  }

  async componentDidMount() {
    try {
      //let { data } = await API.pieToken()
      let { questions } = await API.assessmentQuestions({ assessmentId: 1 })
      console.log(questions)
      //console.log(response)
      // userData = userData.data.results[0]
      // this.setState({
      //   ...this.state,
      //   ...{
      //     name: `${userData.name.first} ${userData.name.last}`,
      //   },
      // })
    } catch (e) {
      console.log(e)
    }
  }
}

export default BrowsePage
