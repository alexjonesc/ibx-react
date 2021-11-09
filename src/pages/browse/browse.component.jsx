import React from 'react'
import './browse.styles.scss'
import API from '../../utils/API'

class BrowsePage extends React.Component {
  constructor(props) {
    super(props)

    // state setup
    this.state = {
      title: 'Browse',
      name: null,
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
    const { title, name, activeFilters } = this.state
    const filters = this.state.filters
      .filter((o) => activeFilters.includes(o.id))
      .map((o) => (
        <form className="pa1" key={o.id}>
          <fieldset id={o.id} className="bn">
            <legend>{o.name}</legend>

            {o.items.map((item) => (
              <div className="flex items-center mb2" key={item.id}>
                <input className="mr2" type="checkbox" id={item.id} value={item.id} onChange={this.onFiltershange} />
                <label htmlFor={item.id} className="lh-copy">
                  {item.name}
                </label>
              </div>
            ))}
          </fieldset>
        </form>
      ))

    return (
      <div className="browse-page">
        <h2 className="title light-red">{title}</h2>
        <div>{name}</div>
        <div className="browse-page__filters">{filters}</div>
      </div>
    )
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
      console.log(e)
    }
  }
}

export default BrowsePage
