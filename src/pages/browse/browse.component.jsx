import React from 'react'
import ItemFilters from '../../components/item-filters/item-filters.component'
import './browse.styles.scss'

const BrowsePage = () => (
  <div className="browse-page">
    <div className="browse-page__content">
      <ItemFilters />
      <div className="items">Items Go Here</div>
    </div>
  </div>
)

export default BrowsePage
