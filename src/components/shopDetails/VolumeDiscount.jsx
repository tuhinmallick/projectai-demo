import { useContextElement } from "@/context/Context";
import React, { useState } from "react";

export default function VolumeDiscount({ product }) {
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
      <div className="flat-check-list list-volume-discount">
        {volumeDiscountData.map((discount, index) => (
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
              <h5 className="name">{discount.text}</h5>
              <span className="percent">{discount.save}</span>
            </div>
            <div className="d-flex justify-content-end">
              <div className="rule-price-total">
                <div className="price-label">Total</div>
                <div className="price-compare">{discount.priceCompare}</div>
                <div className="price-regular">{discount.priceRegular}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="tf-btn btn-fill w-100 justify-content-center fw-6 fs-16 animate-hover-btn"
        onClick={() => updateQuantity(product.id, volumeDiscountData[activeIndex].id)}
      >
        Choose this deal
      </button>
    </div>
  );
}
