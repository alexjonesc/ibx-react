import React from 'react'
import { connect } from 'react-redux'
import API from '../../utils/API'
import { setFilters, setSelectedFilters } from '../../redux/item-filters/item-filters.actions'
import {
  selectItemFiltersFilters,
  selectItemFiltersActiveFilters,
  selectItemFiltersSelectedFilters,
} from '../../redux/item-filters/item-filters.selectors'

import './item-filters.styles.scss'

class ItemFilters extends React.Component {
  constructor(props) {
    super(props)

    // function bindings
    this.onFiltershange = this.onFiltershange.bind(this)
    this.filterIsSelected = this.filterIsSelected.bind(this)
  }

  onFiltershange(e) {
    const uniqSelectedFilters = new Set([...this.props.selectedFilters])

    if (e.target.checked) {
      uniqSelectedFilters.add(e.target.value)
    } else {
      uniqSelectedFilters.delete(e.target.value)
    }

    this.props.setSelectedFilters([...uniqSelectedFilters])
  }

  filterIsSelected({ filterId, filterItemId }) {
    return this.props.selectedFilters.includes(filterItemId)
  }

  render() {
    const { activeFilters } = this.props
    const filters = this.props.filters
      .filter((filter) => activeFilters.includes(filter.id))
      .map((filter) => (
        <form className="item-filters" key={filter.id}>
          <fieldset id={filter.id} className="bn">
            <legend className="fw7">{filter.name}</legend>
            {filter.items.map((item) => (
              <div className="flex items-center" key={item.id}>
                <input
                  className="mr2"
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={this.onFiltershange}
                  checked={this.filterIsSelected({
                    filterId: filter.id,
                    filterItemId: item.id,
                  })}
                />
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
      if (!this.props.filters.length) {
        let { filters } = await API.filters()
        this.props.setFilters(filters)
      }
    } catch (e) {
      console.warn(e)
    }
  }
}

const mapStateToProps = (state) => ({
  filters: selectItemFiltersFilters(state),
  activeFilters: selectItemFiltersActiveFilters(state),
  selectedFilters: selectItemFiltersSelectedFilters(state),
})

const mapDispatchToProps = (dispatch) => ({
  setFilters: (filters) => dispatch(setFilters(filters)),
  setSelectedFilters: (selectedFilters) => dispatch(setSelectedFilters(selectedFilters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilters)
