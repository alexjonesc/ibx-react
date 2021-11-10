const INITIAL_STATE = {
  filters: [],
  activeFilters: ['itemType'],
  selectedFilters: [],
}

const itemFiltersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
      }
    case 'SET_ACTIVE_FILTERS':
      return {
        ...state,
        activeFilters: action.payload,
      }
    case 'SET_SELECTED_FILTERS':
      return {
        ...state,
        selectedFilters: action.payload,
      }

    default:
      return state
  }
}

export default itemFiltersReducer
