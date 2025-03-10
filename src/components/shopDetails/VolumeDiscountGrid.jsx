import { useContextElement } from "@/context/Context";

import React, { useState } from "react";

export default function VolumeDiscountGrid({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { updateQuantity } = useContextElement();

  const volumeDiscountData = [
    {
      id: 1,
      quantity: "3",
      save: "10%",
      priceCompare: "€90.00",
      priceRegular: "€81.00",
      text: "Buy 3 items, get 10% off",
    },
    {
      id: 2,
      quantity: "5",
      save: "15%",
      priceCompare: "€150.00",
      priceRegular: "€127.00",
      text: "Buy 5 items, get 15% off",
    },
    {
      id: 3,
      quantity: "7",
      save: "20%",
      priceCompare: "€210.00",
      priceRegular: "€168.00",
      text: "Buy 7 items, get 20% off",
    },
    {
      id: 4,
      quantity: "9",
      save: "25%",
      priceCompare: "€270.00",
      priceRegular: "€200.00",
      text: "Buy 9 items, get 25% off",
    },
  ];

  return (
    <div className="tf-product-volume-discount">
      <div className="flat-check-list list-volume-discount-grid">
        {volumeDiscountData.map((item, index) => (
          <div
            key={index}
            className={`check-item volume-discount-item ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="rule-item-summary">
              <div className="check-radio">
                <span />
              </div>
              <div className="thumbnail-box">
                <div className="thumbnail">
                  <img
                    alt={item.imgAlt}
                    src={item.imgSrc}
                    width={120}
                    height={152}
                  />
                </div>
                <h5 className="name">{item.name}</h5>
              </div>
              <span className="percent">{item.percent}</span>
            </div>
            <div className="rule-price-total">
              <div className="price-compare">{item.priceCompare}</div>
              <div className="price-regular">{item.priceRegular}</div>
            </div>
            {item.badge && (
              <div className="bag-sticky">
                <div className="feature effect-flash">
                  {item.badge.icon}
                  {item.badge.text}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="tf-btn bg_green-11 w-100 justify-content-center fw-6 effect-flash text_white text-uppercase letter-3"
        onClick={() =>
          updateQuantity(product.id, volumeDiscountData[activeIndex].quantity)
        }
      >
        Choose this deal
      </button>
    </div>
  );
}
