import ItemListTypes from './item-list.types'

const INITIAL_STATE = {
  items: [],
  isFetching: false,
  errorMessage: null,
}

const itemListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemListTypes.FETCH_ITEMS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      }
    case ItemListTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
        errorMessage: null,
      }
    case ItemListTypes.FETCH_ITEMS_START_ERROR:
      return {
        ...state,
        items: [],
        isFetching: false,
        errorMessage: action.payload,
      }

    default:
      return state
  }
}

export default itemListReducer
