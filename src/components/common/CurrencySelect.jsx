import { useEffect, useRef, useState } from "react";

const currencyOptions = [
  {
    id: "currency-1",
    text: "EUR € | Germany",
    flag: "/images/country/de.svg",
    value: "EUR",
    symbol: "€",
    checked: true,
  },
  {
    id: "currency-2",
    text: "USD $ | United States",
    flag: "/images/country/us.svg",
    value: "USD",
    symbol: "$",
    checked: false,
  }
];

export default function CurrencySelect({ topStart = false, light = false, onCurrencyChange }) {
  const [selected, setSelected] = useState(currencyOptions[0]);
  const [isDDOpen, setIsDDOpen] = useState(false);
  const languageSelect = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageSelect.current && !languageSelect.current.contains(event.target)) {
        setIsDDOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCurrencySelect = (currency) => {
    setSelected(currency);
    setIsDDOpen(false);
    if (onCurrencyChange) {
      onCurrencyChange(currency);
    }
  };

  return (
    <div
      ref={languageSelect}
      onClick={() => setIsDDOpen((pre) => !pre)}
      className={`dropdown bootstrap-select image-select center style-default type-currencies ${
        light ? "color-white" : ""
      } ${isDDOpen ? "show" : ""}`}
    >
      <button
        type="button"
        tabIndex={-1}
        className={`btn dropdown-toggle btn-light ${isDDOpen ? "show" : ""}`}
        title={selected.text}
      >
        <div className="filter-option">
          <div className="filter-option-inner">
            <div className="filter-option-inner-inner">
              <img
                src={selected.flag}
                width={20}
                height={15}
                alt={selected.value}
                className="currency-flag"
              />
              <span className="currency-text">{selected.value}</span>
            </div>
          </div>
        </div>
      </button>
      <div
        className={`dropdown-menu ${isDDOpen ? "show" : ""}`}
        style={{
          maxHeight: "899.688px",
          overflow: "hidden",
          minHeight: 100,
          position: "absolute",
          inset: "auto auto 0px 0px",
          margin: 0,
          transform: `translate(0px, ${topStart ? 22 : -20}px)`,
        }}
      >
        <div className="inner show" style={{ maxHeight: "869.688px", overflowY: "auto" }}>
          <ul className="dropdown-menu inner show" role="presentation">
            {currencyOptions.map((currency) => (
              <li key={currency.id} onClick={() => handleCurrencySelect(currency)}>
                <a
                  className={`dropdown-item ${
                    selected.id === currency.id ? "active selected" : ""
                  }`}
                >
                  <span className="currency-option">
                    <img
                      src={currency.flag}
                      width={20}
                      height={15}
                      alt={currency.value}
                      className="currency-flag"
                    />
                    <span className="currency-text">{currency.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
