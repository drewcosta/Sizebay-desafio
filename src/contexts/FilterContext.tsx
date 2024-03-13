import { ReactNode, createContext, useState } from "react";
import { IFilterContext } from "../types/IFilterContext";

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({} as IFilterContext);

export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [currentStatus, setCurrentStatus] = useState('');
  const [searchTask, setSearchTask] = useState('');

  const removeFilters = () => {
    setCurrentStatus('');
    setSearchTask('');
  };

  return (
    <FilterContext.Provider
      value={{
        currentStatus,
        searchTask,
        setCurrentStatus,
        setSearchTask,
        removeFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}