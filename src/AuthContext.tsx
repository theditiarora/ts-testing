import { createContext, useState, useContext } from "react";
const UserContext = createContext({});

export const Context = () => {
    return useContext(UserContext)
}

export const AuthProvider = ({ children }: any) => {
  const [signedin, setSignedin] = useState(false);
  const [name, setName]  = useState('')
  const [email, setEmail] = useState('')
  const [tasks, setTasks] = useState([])
  
  const value = {
      signedin, setSignedin,
      tasks, setTasks,
      name, setName,
      email, setEmail,
  };

  return (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
  );
};