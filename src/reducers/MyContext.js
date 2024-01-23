import {createContext, useState} from 'react';

export const MyContext = createContext({
  value: '',
  value2: '',
  addValue: '',
  addValue2: '',
});

const MyContextProvider = ({children}) => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();

  const addValue = value => {
    setValue(value);
  };
  const addValue2 = value => {
    setValue(value);
  };
  const values = {
    value: value,
    value2: value2,
    addValue: addValue,
    addValue2: addValue2,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
export default MyContextProvider;
