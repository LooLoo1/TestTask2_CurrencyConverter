import Select from "react-select";
import "./CurrencyInput.scss";

const customStyles = {
  option: (defaultStyles) => ({
    ...defaultStyles,
    color: "#121e62",
    backgroundColor: "white",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "white",
    padding: "10px",
    border: "none",
    boxShadow: "none",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#121e62" }),
};

const CurrencyInput = (props) => {
  const options = props.currencies.map((currency) => ({
    value: currency,
    label: currency,
  }));

  return (
    <div className="group">
      <input
        type="text"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <Select
        options={options}
        styles={customStyles}
        defaultValue={{ label: props.currency, value: props.currency }}
        onChange={(ev) => props.onCurrencyChange(ev.value)}
      />
    </div>
  );
};

export default CurrencyInput;
