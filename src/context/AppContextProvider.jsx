import { createContext, useContext, useReducer } from "react";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {
  filters: {
    search: "",
    sort: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "SORT":
      return {
        ...state,
        sort: action.payload,
      };

    default:
      break;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
