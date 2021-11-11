import React from 'react'
import { connect } from 'react-redux'
import API from '../../utils/API'
import { setItems } from '../../redux/item-list/item-list.actions'

import './item-list.styles.scss'

class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
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
    return <div className="item-list">{items}</div>
  }

  async componentDidMount() {
    try {
      let { items } = await API.items()
      console.log(items)
      this.props.setItems(items)
    } catch (e) {
      console.warn(e)
    }
  }
}

const mapStateToProps = ({ itemList: { items } }) => ({
  items,
})

const mapDispatchToProps = (dispatch) => ({
  setItems: (items) => dispatch(setItems(items)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
