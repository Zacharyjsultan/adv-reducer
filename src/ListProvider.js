import { createContext, useReducer } from 'react';
import {
  initialState,
  reducer,
} from './components/reducers/list-reducer';

export const Context = createContext();

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
