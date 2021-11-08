// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Browse from './pages/browse/browse.component'

const getCookieValue = function (name) {
  var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'))
  return match ? match[3] : ''
}

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
    let sess = null
    const authReady = this.authReady
    // console.log(this)

    const createSessionScript = () => {
      const uri = `${process.env.REACT_APP_RP_SESSION_CDN_URI}/js/rp_session.min.js`
      const sessionScript = document.createElement('script')
      sessionScript.setAttribute('id', 'sessionScript')
      sessionScript.setAttribute('src', uri)
      sessionScript.onload = function () {
        startSession()
      }
      document.head.appendChild(sessionScript)
    }

    function startSession() {
      let sessionState = getCookieValue(process.env.REACT_APP_OIDC_SESSION_STATE_COOKIE)
      sess = new window.RPSession(
        process.env.REACT_APP_OIDC_CLIENT_ID,
        sessionState,
        process.env.REACT_APP_OIDC_ISSUER,
        {
          interval: 5 * 1000,
          opFrameId: 'op_session_iframe',
          reauthenticate: function () {
            console.log('reauthenticate')
          },
          logout: function () {
            console.log('logout')
          },
        }
      )

      sess.start()
      console.log('Auth Session Started')
      authReady()
    }

    createSessionScript()
  }
}

export default App
