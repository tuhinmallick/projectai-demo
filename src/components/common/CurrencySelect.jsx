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
      className="currency-selector-wrapper"
    >
      <button
        type="button"
        onClick={() => setIsDDOpen(!isDDOpen)}
        className="currency-selector-button"
      >
        <img
          src={selected.flag}
          width={16}
          height={12}
          alt={selected.value}
          className="currency-flag"
        />
        <span className="currency-code">{selected.value}</span>
        <svg 
          className={`dropdown-arrow ${isDDOpen ? 'open' : ''}`}
          width="10" 
          height="6" 
          viewBox="0 0 10 6" 
          fill="none"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isDDOpen && (
        <div className="currency-dropdown">
          {currencyOptions.map((currency) => (
            <button
              key={currency.id}
              className={`currency-option ${selected.id === currency.id ? 'selected' : ''}`}
              onClick={() => handleCurrencySelect(currency)}
            >
              <img
                src={currency.flag}
                width={16}
                height={12}
                alt={currency.value}
                className="currency-flag"
              />
              <span className="currency-text">{currency.text}</span>
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .currency-selector-wrapper {
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .currency-selector-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          padding: 8px;
          cursor: pointer;
          font-size: 14px;
          color: #333;
        }

        .currency-flag {
          border-radius: 2px;
          object-fit: cover;
        }

        .currency-code {
          font-weight: 500;
        }

        .dropdown-arrow {
          transition: transform 0.2s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .currency-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 8px 0;
          min-width: 200px;
          z-index: 1000;
        }

        .currency-option {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 8px 16px;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-size: 14px;
          color: #333;
        }

        .currency-option:hover {
          background: #f5f5f5;
        }

        .currency-option.selected {
          background: #f0f0f0;
        }

        .currency-text {
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
