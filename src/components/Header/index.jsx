const Header = ({ rates, base, list }) => {
  const format = (number) => {
    return number.toFixed(4);
  };

  return (
    <header>
      <div className="logo">O</div>
      <div>
        {rates && list?.map((el) => (
          <span key={el}>
            {format(rates[base] / rates[el])} {el}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
