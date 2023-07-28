import axios from "../libs/axios";
import { createContext, useCallback, useContext, useState } from "react";

const PersonContext = createContext();

const PersonProvider = ({ children }) => { 
  const [person, setPerson] = useState(null);

  const indexPerson = useCallback(async () => {
    try {
      const response = await axios.get('api/person/');
      setPerson(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const values = {
    indexPerson,
    person,
  };

  return (
    <PersonContext.Provider value={values}>
      {children}
    </PersonContext.Provider>
  );
};

const usePerson = () => {
  const context = useContext(PersonContext);
  if (!context) throw new Error('usePerson must be used within an PersonContext');
  return context;
};

export { usePerson, PersonProvider };