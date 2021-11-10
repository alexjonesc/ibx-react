export const setFilters = (filters) => ({
  type: 'SET_FILTERS',
  payload: filters,
})

export const setActiveFilters = (activeFilters) => ({
  type: 'SET_ACTIVE_FILTERS',
  payload: activeFilters,
})

export const setSelectedFilters = (selectedFilters) => ({
  type: 'SET_SELECTED_FILTERS',
  payload: selectedFilters,
})
