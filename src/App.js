import React, { useState } from 'react';
import User from './User';

export const MyContext = React.createContext();

function App() {
  const [name,setName] = useState("Salonee");
  const [age,setAge] = useState(21);

  const contextValue = {name}
  return (
    <div >
     <MyContext.Provider value={{name,age}}>
       <User />

     </MyContext.Provider>
    
    </div>
  );
}

export default App;
