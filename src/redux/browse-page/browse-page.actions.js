import BrowsePageTypes from './browse-page.types'

export const initBrowsePage = () => ({
  type: BrowsePageTypes.BROWSE_PAGE_INIT,
})

export const browsePageReady = (ready) => ({
  type: BrowsePageTypes.BROWSE_PAGE_READY,
  payload: ready,
})
