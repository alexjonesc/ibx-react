import React from 'react'
import API from '../../utils/API'
import './item-filters.styles.scss'

class ItemFilters extends React.Component {
  constructor(props) {
    super(props)

    // state setup
    this.state = {
      filters: [],
      activeFilters: ['itemType'],
      selectedFilters: [],
    }

    // function bindings
    this.onFiltershange = this.onFiltershange.bind(this)
  }

  onFiltershange(e) {
    console.log(e.target.value)
    this.setState(
      {
        ...this.state,
        selectedFilters: [...this.state.selectedFilters, e.target.value],
      },
      () => {
        console.log(this.state.selectedFilters)
      }
    )
  }

  render() {
    const { activeFilters } = this.state
    const filters = this.state.filters
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
      console.log(filters)
      this.setState({
        ...this.state,
        filters,
      })
    } catch (e) {
      console.warn(e)
    }
  }
}

export default ItemFilters
