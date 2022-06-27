import React, {
  useContext,
  createContext,
  useEffect,
  useState
} from "react";

const WithoutFreeShippingContext = createContext({});

export function WithoutFreeShippingProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/resources/abaixo-10-reais.json");
      const data = await response.json();
      console.log(data)

      setData(data);
    }
   fetchData();
  }, []);

  return (
    <WithoutFreeShippingContext.Provider value={{ data }}>
      {children}
    </WithoutFreeShippingContext.Provider>
  )
}

export const useWithoutFreeShipping = () => {
  const context = useContext(WithoutFreeShippingContext);

  return context;
}