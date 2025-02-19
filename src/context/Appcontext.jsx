import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    // Define any state, methods, or data you want to provide to the context
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
