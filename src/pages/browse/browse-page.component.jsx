import React from 'react'
import { connect } from 'react-redux'
import { initBrowsePage } from '../../redux/browse-page/browse-page.actions'
import ItemFilters from '../../components/item-filters/item-filters.component'
import ItemList from '../../components/item-list/item-list.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import './browse-page.styles.scss'

const BrowseView = () => (
  <div className="browse-page">
    <div className="browse-page__content">
      <ItemFilters />
      <ItemList />
    </div>
  </div>
)

const BrowseViewWithSpinner = WithSpinner(BrowseView)

class BrowsePage extends React.Component {
  render() {
    return <BrowseViewWithSpinner isLoading={this.props.isLoading} />
  }

  componentDidMount() {
    this.props.initBrowsePage()
  }
}

const mapStateToProps = (state) => ({
  isLoading: !state.browsePage.ready,
})

const mapDispatchToProps = (dispatch) => ({
  initBrowsePage: () => dispatch(initBrowsePage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage)
