import React from 'react'
import ItemFilters from '../../components/item-filters/item-filters.component'
import ItemList from '../../components/item-list/item-list.component'

import './browse-page.styles.scss'

const BrowsePage = () => (
  <div className="browse-page">
    <div className="browse-page__content">
      <ItemFilters />
      <ItemList />
    </div>
  </div>
)

export default BrowsePage
