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
    let userData = await API.get('/', {
      params: {
        results: 1,
        inc: 'name,email,picture',
      },
    })

    userData = userData.data.results[0]

    this.setState({
      ...this.state,
      ...{
        name: `${userData.name.first} ${userData.name.last}`,
      },
    })

    console.log(userData)
  }
}

export default BrowsePage
