import React, { createContext, useState } from "react";
import dataPizzas from "./data/pizzas.json";

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(dataPizzas);
  const [cart, setCart] = useState([]);

  const valueContextProvider = {
    pizzas,
    setPizzas,
    cart,
    setCart,
  };

  return (
    <DataContext.Provider value={valueContextProvider}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, ContextProvider };
