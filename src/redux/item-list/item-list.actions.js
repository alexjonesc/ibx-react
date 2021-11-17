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

export const getItems = () => ({
  type: ItemListTypes.GET_ITEMS,
})
