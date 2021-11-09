import React from 'react'
import Browse from './pages/browse/browse.component'
import Auth from './utils/Auth'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false,
    }

    this.authReady = this.authReady.bind(this)
  }

  render() {
    const { ready } = this.state
    return <div className="App">{ready ? <Browse /> : 'loading...'}</div>
  }

  authReady() {
    this.setState({
      ...this.state,
      ready: true,
    })
  }

  async componentDidMount() {
    await Auth.init()
    this.authReady()
  }
}

export default App
