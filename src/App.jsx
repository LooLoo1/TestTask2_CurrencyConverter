import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";
import Header from "./components/Header";

const App = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=USD&apikey=BN5kAZ1ezIgLqhr80jU9AJN083Yj2AIQ"
      )
      .then((response) => {
        setRates(response.data.rates);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="conteiner">
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <Header rates={rates} base={"UAH"} list={["USD", "EUR"]} />
          <CurrencyConvertor rates={rates} />
        </>
      )}
    </div>
  );
};

export default App;
