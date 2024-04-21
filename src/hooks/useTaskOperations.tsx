import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

export function useTaskOperations(){
  return useContext(TaskContext);
}