const Header = ({ rates, base = "UAH", list }) => {
  const format = (number) => {
    return number.toFixed(4);
  };

  return (
    <header>
      <div className="logo">O</div>
      <div>
        {list.map((el) => (
          <span key={el}>
            {format(rates[base] / rates[el])} {el}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
