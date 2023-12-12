import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  currentStatus: '',
  searchTask: '',
  setCurrentStatus:(value: string) => {},
  setSearchTask:(value: string) => {},
})

interface PropsProvider{
  children: ReactNode;
}

export const FilterContextProvider = ({ children }: PropsProvider) => {
  const [ currentStatus, setCurrentStatus ] = useState('');
  const [ searchTask, setSearchTask ] = useState('');

  return(
    <FilterContext.Provider
      value={{
        currentStatus,
        searchTask,
        setCurrentStatus,
        setSearchTask,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}