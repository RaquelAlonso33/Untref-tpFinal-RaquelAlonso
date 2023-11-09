import { createContext,useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (({children}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const data = {
    selectedOption, setSelectedOption,
  };

  return<AppContext.Provider value={data}>{children}</AppContext.Provider>
})


export const useSharedState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useSharedState debe ser utilizado dentro de SharedStateProvider');
  }
  return context;
};
