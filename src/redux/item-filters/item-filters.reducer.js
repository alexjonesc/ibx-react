import ItemFiltersTypes from './item-filters.types'

const INITIAL_STATE = {
  filters: [],
  activeFilters: ['itemType'],
  selectedFilters: [],
  isFetching: false,
  errorMessage: null,
}

const itemFiltersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemFiltersTypes.FETCH_FILTERS_START:
      return {
        ...state,
        isFetching: true,
      }
    case ItemFiltersTypes.FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        filters: action.payload || [],
        isFetching: false,
      }
    case ItemFiltersTypes.FETCH_FILTERS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload || 'error',
      }
    case ItemFiltersTypes.SET_ACTIVE_FILTERS:
      return {
        ...state,
        activeFilters: action.payload || [],
      }
    case ItemFiltersTypes.SET_SELECTED_FILTERS:
      return {
        ...INITIAL_STATE,
        ...state,
        selectedFilters: action.payload || [],
      }

    default:
      return state
  }
}

export default itemFiltersReducer
