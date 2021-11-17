import ItemFiltersTypes from './item-filters.types'
import API from '../../utils/API'

export const fetchFiltersStart = () => ({
  type: ItemFiltersTypes.FETCH_FILTERS_START,
})

export const fetchFiltersSuccess = (filters) => ({
  type: ItemFiltersTypes.FETCH_FILTERS_SUCCESS,
  payload: filters,
})

export const fetchFiltersError = (errorMessage) => ({
  type: ItemFiltersTypes.FETCH_FILTERS_ERROR,
  payload: errorMessage,
})

export const getFilters = () => ({
  type: ItemFiltersTypes.GET_FILTERS,
})

export const setActiveFilters = (activeFilters) => ({
  type: 'SET_ACTIVE_FILTERS',
  payload: activeFilters,
})

export const setSelectedFilters = (selectedFilters) => ({
  type: 'SET_SELECTED_FILTERS',
  payload: selectedFilters,
})
