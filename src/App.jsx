import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";
import Header from "./components/Header";

function App() {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const storege = localStorage.getItem("currency");
  useEffect(() => {
    if (storege) {
      setIsLoading(true);
      setRates(JSON.parse(storege).rates);
    } else {
      axios
        .get(
          "https://api.apilayer.com/fixer/latest?base=USD&apikey=BN5kAZ1ezIgLqhr80jU9AJN083Yj2AIQ"
        )
        .then((response) => {
          localStorage.setItem("currency", JSON.stringify(response.data));
          setRates(response.data.rates);
          setIsLoading(true);
        });
    }
  }, []);

  return (
    <div className="conteiner">
      {!isLoading && <h1 className="loading">Loading...</h1>}
      {isLoading && (
        <>
          <Header rates={rates} base={"UAH"} list={["USD", "EUR"]} />
          <CurrencyConvertor rates={rates} />
        </>
      )}
    </div>
  );
}

export default App;
