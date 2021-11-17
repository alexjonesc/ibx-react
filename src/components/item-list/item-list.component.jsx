import React from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../redux/item-list/item-list.actions'
import { selectItemListItems, selectItemListCount } from '../../redux/item-list/item-list.selectors'

import './item-list.styles.scss'

class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      unsubscribe: () => ({}),
    }
  }

  render() {
    const items = this.props.items
      .filter((o) => o)
      .map((o) => (
        <div className="item-list-item" key={o.itemId}>
          <div className="item-list-item__meta">
            <span>ItemType: {o.itemType}</span>
            <span>ItemId: {o.itemId}</span>
            <span>ItemRevId: {o.itemRevId}</span>
            <span>RemoteId: {o.remoteIdVersioned}</span>
          </div>
        </div>
      ))

    const itemsList = () => (
      <div className="item-list__content">
        <div className="item-list__count">Viewing: {this.props.itemCount} items</div>
        <div className="item-list__items">{items}</div>
      </div>
    )

    const itemsListLoadng = () => (
      <div className="item-list__content">
        <div>Loading items...</div>
      </div>
    )

    return (
      <div className="item-list">{this.props.isFetching ? itemsListLoadng() : itemsList()}</div>
    )
  }

  async componentDidMount() {
    this.props.getItems()
  }
}

const mapStateToProps = (state) => ({
  items: selectItemListItems(state),
  itemCount: selectItemListCount(state),
  isFetching: state.itemList.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
