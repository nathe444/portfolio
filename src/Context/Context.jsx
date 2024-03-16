import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  hamburger: true
};


export const Context = createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [state , dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider
      value={{
      hamburger:state.hamburger,
      dispatch,
      }}
       >
      {children}
    </Context.Provider>
  );
}


