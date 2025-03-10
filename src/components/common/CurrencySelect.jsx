import { useEffect, useRef, useState } from "react";

const currencyOptions = [
  {
    id: "currency-1",
    text: "EUR € | Germany",
    flag: "/images/flags/germany.png",
    checked: true,
  },
  {
    id: "currency-2",
    text: "USD $ | United States",
    flag: "/images/flags/us.png",
    checked: false,
  }
];

export default function CurrencySelect({ topStart = false, light = false }) {
  const [selected, setSelected] = useState(currencyOptions[0]);
  const [isDDOpen, setIsDDOpen] = useState(false);
  const languageSelect = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageSelect.current &&
        !languageSelect.current.contains(event.target)
      ) {
        setIsDDOpen(false); // Close the dropdown if click is outside
      }
    };
    // Add the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={languageSelect}
      onClick={() => setIsDDOpen((pre) => !pre)}
      className={`dropdown bootstrap-select image-select center style-default type-currencies ${
        light ? "color-white" : ""
      } dropup`}
    >
      <button
        type="button"
        tabIndex={-1}
        className={`btn dropdown-toggle btn-light  ${isDDOpen ? "show" : ""} `}
        title="EUR € | Germany"
      >
        <div className="filter-option">
          <div className="filter-option-inner">
            <div className="filter-option-inner-inner">
              <img
                src={selected.flag}
                width="640"
                height="480"
                alt="image"
              />
              {selected.text}
            </div>
          </div>{" "}
        </div>
      </button>
      <div
        className={`dropdown-menu ${isDDOpen ? "show" : ""} `}
        style={{
          maxHeight: "899.688px",
          overflow: "hidden",
          minHeight: 142,
          position: "absolute",
          inset: "auto auto 0px 0px",
          margin: 0,
          transform: `translate(0px, ${topStart ? 22 : -20}px)`,
        }}
        data-popper-placement={`${!topStart ? "top" : "bottom"}-start`}
      >
        <div
          className="inner show"
          style={{ maxHeight: "869.688px", overflowY: "auto", minHeight: 112 }}
        >
          <ul
            className="dropdown-menu inner show"
            role="presentation"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            {currencyOptions.map((elm, i) => (
              <li onClick={() => setSelected(elm)} key={i}>
                <a
                  className={`dropdown-item ${
                    selected == elm ? "active selected" : ""
                  }`}
                >
                  <span className="text">
                    <img
                      src={elm.flag}
                      width="640"
                      height="480"
                      alt="image"
                    />
                    {elm.text}
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
