export interface IFilterContext{
  currentStatus: string,
  searchTask: string,
  setCurrentStatus: (value: string) => void,
  setSearchTask: (value: string) => void,
  removeFilters: () => void,
}