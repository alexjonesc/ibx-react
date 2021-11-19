import React from 'react'
import { connect } from 'react-redux'
import { initBrowsePage } from '../../redux/browse-page/browse-page.actions'
import ItemFilters from '../../components/item-filters/item-filters.component'
import ItemList from '../../components/item-list/item-list.component'

import './browse-page.styles.scss'

class BrowsePage extends React.Component {
  render() {
    const { browsePageReady } = this.props

    const browse = () => (
      <div className="browse-page__content">
        <ItemFilters />
        <ItemList />
      </div>
    )

    const loading = () => <div className="browse-page__content">Loading...</div>

    return <div className="browse-page">{browsePageReady ? browse() : loading()}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage)
