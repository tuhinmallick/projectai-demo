import { useContextElement } from "@/context/Context";
import { products54 } from "@/data/products";

import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  const { setQuickViewItem } = useContextElement();
  const {
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section className="flat-spacing-21 bg_light-grey-4">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Most Popular</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-product-sell"
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              1200: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spd322",
            }}
            navigation={{
              prevEl: ".snbp322",
              nextEl: ".snbn322",
            }}
          >
            {products54.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="card-product style-10">
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="lazyload img-product"
                        src={product.imgSrc}
                        alt={product.title}
                        width={360}
                        height={360}
                      />
                      <img
                        className="lazyload img-hover"
                        src={product.imgHoverSrc}
                        alt={product.title}
                        width={360}
                        height={360}
                      />
                    </Link>
                    <div className="list-product-btn absolute-2">
                      <a
                        onClick={() => addToWishlist(product.id)}
                        className="box-icon bg_white wishlist btn-icon-action"
                      >
                        <span
                          className={`icon icon-heart ${
                            isAddedtoWishlist(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {isAddedtoWishlist(product.id)
                            ? "Already Wishlisted"
                            : "Add to Wishlist"}
                        </span>
                        <span className="icon icon-delete" />
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        onClick={() => addToCompareItem(product.id)}
                        className="box-icon bg_white compare btn-icon-action"
                      >
                        <span
                          className={`icon icon-compare ${
                            isAddedtoCompareItem(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {" "}
                          {isAddedtoCompareItem(product.id)
                            ? "Already Compared"
                            : "Add to Compare"}
                        </span>
                        <span className="icon icon-check" />
                      </a>
                      <a
                        href="#quick_view"
                        onClick={() => setQuickViewItem(product)}
                        data-bs-toggle="modal"
                        className="box-icon bg_white quickview tf-btn-loading"
                      >
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info text-center">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="title link"
                    >
                      {product.title}
                    </Link>
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                      <div className="rating">
                        <span className="stars">{product.rating} ★</span>
                        <span className="reviews">({product.reviews})</span>
                      </div>
                      <span className="size">{product.size}</span>
                    </div>
                    <div className="price-cart-wrap d-flex align-items-center justify-content-between">
                      <span className="price">€{product.price.toFixed(2)}</span>
                      <a
                        onClick={() => addProductToCart(product.id)}
                        className="btn-add-cart"
                      >
                        {isAddedToCartProducts(product.id)
                          ? "Added"
                          : "Add to cart"}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw disable-line style-white nav-next-slider nav-next-product lg snbp322">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw disable-line style-white nav-prev-slider nav-prev-product lg snbn322">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center spd322" />
        </div>
      </div>
    </section>
  );
}
