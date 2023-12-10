import { useContext } from "react"
import { FilterContext } from "../contexts/FilterContext"

export function useFilterTasks(){
  return useContext(FilterContext);
}