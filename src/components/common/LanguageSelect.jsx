import { useEffect, useRef, useState } from "react";

const languageOptions = [
  {
    id: "lang-1",
    text: "English",
    flag: "/images/country/us.svg",
    code: "EN",
    checked: true,
  },
  {
    id: "lang-2",
    text: "Deutsch",
    flag: "/images/country/de.svg",
    code: "DE",
    checked: false,
  }
];

export default function LanguageSelect({ topStart = false, light = false, onLanguageChange }) {
  const [selected, setSelected] = useState(languageOptions[0]);
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

  const handleLanguageSelect = (language) => {
    setSelected(language);
    setIsDDOpen(false);
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

  return (
    <div
      ref={languageSelect}
      className="language-selector-wrapper"
    >
      <button
        type="button"
        onClick={() => setIsDDOpen(!isDDOpen)}
        className="language-selector-button"
      >
        <img
          src={selected.flag}
          width={16}
          height={12}
          alt={selected.code}
          className="language-flag"
        />
        <span className="language-code">{selected.code}</span>
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
        <div className="language-dropdown">
          {languageOptions.map((language) => (
            <button
              key={language.id}
              className={`language-option ${selected.id === language.id ? 'selected' : ''}`}
              onClick={() => handleLanguageSelect(language)}
            >
              <img
                src={language.flag}
                width={16}
                height={12}
                alt={language.code}
                className="language-flag"
              />
              <span className="language-text">{language.text}</span>
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .language-selector-wrapper {
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .language-selector-button {
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

        .language-flag {
          border-radius: 2px;
          object-fit: cover;
        }

        .language-code {
          font-weight: 500;
        }

        .dropdown-arrow {
          transition: transform 0.2s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .language-dropdown {
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

        .language-option {
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

        .language-option:hover {
          background: #f5f5f5;
        }

        .language-option.selected {
          background: #f0f0f0;
        }

        .language-text {
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
