import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  currentStatus: '',
  setCurrentStatus:(value: string) => {},
})

interface PropsProvider{
  children: ReactNode;
}

export const FilterContextProvider = ({ children }: PropsProvider) => {
  const [ currentStatus, setCurrentStatus ] = useState('');

  return(
    <FilterContext.Provider
      value={{
        currentStatus,
        setCurrentStatus,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}