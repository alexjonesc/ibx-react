const getCookieValue = function (name) {
  var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'))
  return match ? match[3] : ''
}

const createSessionScript = () => {
  return new Promise((resolve) => {
    const uri = `${process.env.REACT_APP_RP_SESSION_CDN_URI}/js/rp_session.min.js`
    const sessionScript = document.createElement('script')
    sessionScript.setAttribute('id', 'sessionScript')
    sessionScript.setAttribute('src', uri)
    sessionScript.onload = function () {
      resolve()
    }
    document.head.appendChild(sessionScript)
  })
}

function startSession() {
  return new Promise((resolve) => {
    let sessionState = getCookieValue(process.env.REACT_APP_OIDC_SESSION_STATE_COOKIE)
    const sess = new window.RPSession(
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
    resolve()
  })
}

const AUTH = {
  async init() {
    return new Promise(async (resolve) => {
      try {
        await createSessionScript()
        await startSession()
        resolve(true)
      } catch (e) {
        //...
      }
    })
  },
}

export default AUTH
