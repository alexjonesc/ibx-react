import ItemListTypes from './item-list.types'
import API from '../../utils/API'

export const fetchItemsStart = () => ({
  type: ItemListTypes.FETCH_ITEMS_START,
})

export const fetchItemsSuccess = (items) => ({
  type: ItemListTypes.FETCH_ITEMS_SUCCESS,
  payload: items,
})

export const fetchItemsError = (errorMessage) => ({
  type: ItemListTypes.FETCH_ITEMS_ERROR,
  payload: errorMessage,
})

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchItemsStart())
      let { items } = await API.items()
      dispatch(fetchItemsSuccess(items))
    } catch (e) {
      console.warn(e)
      dispatch(fetchItemsError(e))
    }
  }
}
