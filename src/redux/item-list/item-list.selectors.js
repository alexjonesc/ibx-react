import { createSelector } from 'reselect'

const selectItemList = (state) => state.itemList

export const selectItemListItems = createSelector([selectItemList], (itemList) => itemList.items)

export const selectItemListCount = createSelector([selectItemListItems], (items) =>
  items.reduce((m, o) => m + 1, 0)
)
