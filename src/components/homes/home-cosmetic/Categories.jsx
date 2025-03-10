import { Link } from "react-router-dom";
import React from "react";

export default function Categories() {
  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="flat-title px-0 flex-row">
          <h5 className="fw-6">Featured Categories</h5>
        </div>
        <div className="tf-categories-wrap justify-content-start">
          <div className="tf-categories-container">
            <div className="collection-item-circle style-2 hover-img">
              <div className="has-saleoff-wrap position-relative">
                <Link
                  to={`/shop-collection-list`}
                  className="collection-image img-style"
                >
                  <img
                    className="lazyload"
                    data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category1.png?v=1721181730&width=160"
                    alt="New Arrivals"
                    src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category1.png?v=1721181730&width=160"
                    width={160}
                    height={160}
                  />
                </Link>
                <div className="sale-off fw-5">10% off</div>
              </div>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  New Arrivals
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category2.png?v=1721181730&width=160"
                  alt="Best Sellers"
                  src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category2.png?v=1721181730&width=160"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Best Sellers
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <div className="has-saleoff-wrap position-relative">
                <Link
                  to={`/shop-collection-list`}
                  className="collection-image img-style"
                >
                  <img
                    className="lazyload"
                    data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category3.png?v=1721184883&width=160"
                    alt="Foundation"
                    src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category3.png?v=1721184883&width=160"
                    width={160}
                    height={162}
                  />
                </Link>
                <div className="sale-off fw-5">Trending</div>
              </div>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Foundation
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category4.png?v=1721184883&width=160"
                  alt="Moisturizers"
                  src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category4.png?v=1721184883&width=160"
                  width={160}
                  height={162}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Moisturizers
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category5.png?v=1721184883&width=160"
                  alt="Perfume"
                  src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category5.png?v=1721184883&width=160"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Perfume
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category6.png?v=1721184883&width=160"
                  alt="Minis"
                  src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category6.png?v=1721184883&width=160"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Minis
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <div className="has-saleoff-wrap position-relative">
                <Link
                  to={`/shop-collection-list`}
                  className="collection-image img-style"
                >
                  <img
                    className="lazyload"
                    data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category7.png?v=1721184883&width=160"
                    alt="Sale"
                    src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category7.png?v=1721184883&width=160"
                    width={160}
                    height={160}
                  />
                </Link>
                <div className="sale-off fw-5">30% off</div>
              </div>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Sale
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category8.png?v=1721184883&width=160"
                  alt="Gift Cards"
                  src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category8.png?v=1721184883&width=160"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Gift Cards
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category9.png?v=1721184883&width=160"
                  alt="Under €20"
                  src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/category9.png?v=1721184883&width=160"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Under €20
                </Link>
              </div>
            </div>
          </div>
          <div className="tf-shopall-wrap">
            <div className="collection-item-circle style-2 tf-shopall">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style tf-shopall-icon"
              >
                <i className="icon icon-arrow1-top-left" />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Shop all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
