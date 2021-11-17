import React from 'react'
import BrowsePage from './pages/browse/browse-page.component'
import { connect } from 'react-redux'
import { initBrowsePage } from './redux/browse-page/browse-page.actions'

class App extends React.Component {
  render() {
    const { browsePageReady } = this.props
    return <div className="App">{browsePageReady ? <BrowsePage /> : 'loading...'}</div>
  }

  async componentDidMount() {
    this.props.initBrowsePage()
  }
}

const mapStateToProps = (state) => ({
  browsePageReady: state.browsePage.ready,
})

const mapDispatchToProps = (dispatch) => ({
  initBrowsePage: () => dispatch(initBrowsePage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
