import { createSelector } from 'reselect'

const selectItemFilters = (state) => state.itemFilters

export const selectItemFiltersFilters = createSelector([selectItemFilters], (itemFilters) => itemFilters.filters)

export const selectItemFiltersActiveFilters = createSelector(
  [selectItemFilters],
  (itemFilters) => itemFilters.activeFilters
)

export const selectItemFiltersSelectedFilters = createSelector(
  [selectItemFilters],
  (itemFilters) => itemFilters.SelectedFilters
)
