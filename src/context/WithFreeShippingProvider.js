import React, {
  useContext,
  createContext,
  useEffect,
  useState
} from "react";

const WithFreeShippingContext = createContext({});

export function WithFreeShippingProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/resources/acima-10-reais.json");
      const data = await response.json();
      console.log(data)
      
      setData(data);
    }
   fetchData();
  }, []);

  return (
    <WithFreeShippingContext.Provider value={{ data }}>
      {children}
    </WithFreeShippingContext.Provider>
  )
}

export function useWithFreeShipping() {
  const context = useContext(WithFreeShippingContext);

  return context;
}