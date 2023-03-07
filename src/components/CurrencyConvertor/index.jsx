import { useState } from "react";
import CurrencyInput from "../CurrencyInput";

function CurrencyConvertor({ rates }) {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");

  const format = (number) => {
    return number.toFixed(4);
  };

  const handleAmount1Change = (amount1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };

  return (
    <div className="converter">
      <h1>Currency Converter</h1>
      {rates && (
        <>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
          />
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
          />
        </>
      )}
    </div>
  );
}

export default CurrencyConvertor;
