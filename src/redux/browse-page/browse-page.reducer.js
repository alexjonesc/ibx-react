import BrowsePageTypes from './browse-page.types'

const INITIAL_STATE = {
  ready: false,
}

const browsePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BrowsePageTypes.BROWSE_PAGE_INIT:
      return {
        ...state,
        ready: false,
      }
    case BrowsePageTypes.BROWSE_PAGE_READY:
      return {
        ...state,
        ready: true,
      }
    default:
      return state
  }
}

export default browsePageReducer
