import React from 'react'
import { connect } from 'react-redux'
import API from '../../utils/API'
import { setFilters, setSelectedFilters } from '../../redux/item-filters/item-filters.actions'

import './item-filters.styles.scss'

class ItemFilters extends React.Component {
  constructor(props) {
    super(props)

    // function bindings
    this.onFiltershange = this.onFiltershange.bind(this)
  }

  onFiltershange(e) {
    const uniqSelectedFilters = new Set([...this.props.selectedFilters, e.target.value])
    this.props.setSelectedFilters([...uniqSelectedFilters])
  }

  render() {
    const { activeFilters } = this.props
    const filters = this.props.filters
      .filter((o) => activeFilters.includes(o.id))
      .map((o) => (
        <form className="item-filters" key={o.id}>
          <fieldset id={o.id} className="bn">
            <legend className="fw7">{o.name}</legend>
            {o.items.map((item) => (
              <div className="flex items-center" key={item.id}>
                <input className="mr2" type="checkbox" id={item.id} value={item.id} onChange={this.onFiltershange} />
                <label htmlFor={item.id} className="lh-copy">
                  {item.name}
                </label>
              </div>
            ))}
          </fieldset>
        </form>
      ))
    return filters
  }

  async componentDidMount() {
    try {
      let { filters } = await API.filters()
      this.props.setFilters(filters)
    } catch (e) {
      console.warn(e)
    }
  }
}

const mapStateToProps = (state) => ({
  filters: state.itemFilters.filters,
  activeFilters: state.itemFilters.activeFilters,
  selectedFilters: state.itemFilters.selectedFilters,
})

const mapDispatchToProps = (dispatch) => ({
  setFilters: (filters) => dispatch(setFilters(filters)),
  setSelectedFilters: (selectedFilters) => dispatch(setSelectedFilters(selectedFilters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilters)
