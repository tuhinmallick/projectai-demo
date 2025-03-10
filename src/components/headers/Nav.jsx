import { Link, useLocation } from "react-router-dom";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { products1 } from "@/data/products";
import { ProductCard } from "../shopCards/ProductCard";
import { Navigation } from "swiper/modules";
import {
  allHomepages,
  blogLinks,
  demoItems,
  pages,
  productDetailPages,
  productsPages,
} from "@/data/menu";

export default function Nav({ isArrow = true, textColor = "", Linkfs = "" }) {
  const { pathname } = useLocation();
  const isMenuActive = (menuItem) => {
    let active = false;
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] == pathname.split("/")[1]) {
        active = true;
      }
    }
    if (menuItem.length) {
      active = menuItem.some(
        (elm) => elm.href?.split("/")[1] == pathname.split("/")[1]
      );
    }
    if (menuItem.length) {
      menuItem.forEach((item) => {
        item.links?.forEach((elm2) => {
          if (elm2.href?.includes("/")) {
            if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
              active = true;
            }
          }
          if (elm2.length) {
            elm2.forEach((item2) => {
              item2?.links?.forEach((elm3) => {
                if (elm3.href.split("/")[1] == pathname.split("/")[1]) {
                  active = true;
                }
              });
            });
          }
        });
        if (item.href?.includes("/")) {
          if (item.href?.split("/")[1] == pathname.split("/")[1]) {
            active = true;
          }
        }
      });
    }

    return active;
  };
  return (
    <>
      {/* Home menu item commented out
      <li className="menu-item">
        <a
          href="#"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive(allHomepages) ? "activeMenu" : ""
          } `}
        >
          Home
          {isArrow ? <i className="icon icon-arrow-down" /> : ""}
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row-demo">
              {demoItems.map((item, index) => (
                <div
                  className={`demo-item ${
                    isMenuActive(item) ? "activeMenu" : ""
                  } `}
                  key={index}
                >
                  <Link to={item.href}>
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src={item.src}
                        alt={item.alt}
                        src={item.src}
                        width="300"
                        height="329"
                      />
                      {item.labels && (
                        <div className="demo-label">
                          {item.labels.map((label, labelIndex) => (
                            <span
                              key={labelIndex}
                              className={label.className || undefined}
                            >
                              {label.text}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="demo-name">{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center view-all-demo">
              <a
                href="https://callapro.ai"
                className="tf-btn btn-xl btn-fill radius-3 animate-hover-btn fw-6"
              >
                <span>View all demos</span>
                <i className="icon icon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </li>
      */}
      
      {/* Shop menu item commented out 
      <li className="menu-item">
        <a
          href="#"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive(productsPages) ? "activeMenu" : ""
          } `}
        >
          Shop
          {isArrow ? <i className="icon icon-arrow-down" /> : ""}
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              {productsPages.map((menu, index) => (
                <div className="col-lg-2" key={index}>
                  <div className="mega-menu-item">
                    <div className="menu-heading">{menu.heading}</div>
                    <ul className="menu-list">
                      {menu.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.href}
                            className={`menu-link-text link ${
                              isMenuActive(link) ? "activeMenu" : ""
                            }`}
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </li>
      */}

      {/* Products menu item commented out
      <li className="menu-item">
        <a
          href="#"
          className={`item-link ${Linkfs} ${textColor}  ${
            isMenuActive(productDetailPages) ? "activeMenu" : ""
          }`}
        >
          Products
          {isArrow ? <i className="icon icon-arrow-down" /> : ""}
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              {productDetailPages.map((menuItem, index) => (
                <div key={index} className="col-lg-2">
                  <div className="mega-menu-item">
                    <div className="menu-heading">{menuItem.heading}</div>
                    <ul className="menu-list">
                      {menuItem.links.map((linkItem, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={linkItem.href}
                            className={`menu-link-text link position-relative  ${
                              isMenuActive(linkItem) ? "activeMenu" : ""
                            }`}
                          >
                            {linkItem.text}
                            {linkItem.extra}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </li>
      */}

      {/* Pages menu item commented out
      <li className="menu-item">
        <a
          href="#"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive(pages) ? "activeMenu" : ""
          }`}
        >
          Pages
          {isArrow ? <i className="icon icon-arrow-down" /> : ""}
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              {pages.map((menuItem, index) => (
                <div key={index} className="col-lg-3">
                  <div className="mega-menu-item">
                    <div className="menu-heading">{menuItem.heading}</div>
                    <ul className="menu-list">
                      {menuItem.links.map((linkItem, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={linkItem.href}
                            className={`menu-link-text link ${
                              isMenuActive(linkItem) ? "activeMenu" : ""
                            }`}
                          >
                            {linkItem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </li>
      */}

      {/* Blog menu item commented out
      <li className="menu-item">
        <a
          href="#"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive(blogLinks) ? "activeMenu" : ""
          }`}
        >
          Blog
          {isArrow ? <i className="icon icon-arrow-down" /> : ""}
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Blog layouts</div>
                  <ul className="menu-list">
                    {blogLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.href}
                          className={`menu-link-text link ${
                            isMenuActive(link) ? "activeMenu" : ""
                          }`}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu-heading">Latest posts</div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="blog-item">
                          <div className="blog-image">
                            <Link to={`/blog-detail/1`}>
                              <img
                                className="lazyload"
                                data-src="/images/blog/blog-1.jpg"
                                alt="blog-1"
                                src="/images/blog/blog-1.jpg"
                                width="500"
                                height="333"
                              />
                            </Link>
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <span className="post-date">March 05, 2024</span>
                            </div>
                            <h5 className="blog-title">
                              <Link to={`/blog-detail/1`}>
                                The Best Street Style From London Fashion Week
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="blog-item">
                          <div className="blog-image">
                            <Link to={`/blog-detail/2`}>
                              <img
                                className="lazyload"
                                data-src="/images/blog/blog-2.jpg"
                                alt="blog-2"
                                src="/images/blog/blog-2.jpg"
                                width="500"
                                height="333"
                              />
                            </Link>
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <span className="post-date">March 05, 2024</span>
                            </div>
                            <h5 className="blog-title">
                              <Link to={`/blog-detail/2`}>
                                Fashion People Share Their Go-To Outfits
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="blog-item">
                          <div className="blog-image">
                            <Link to={`/blog-detail/3`}>
                              <img
                                className="lazyload"
                                data-src="/images/blog/blog-3.jpg"
                                alt="blog-3"
                                src="/images/blog/blog-3.jpg"
                                width="500"
                                height="333"
                              />
                            </Link>
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <span className="post-date">March 05, 2024</span>
                            </div>
                            <h5 className="blog-title">
                              <Link to={`/blog-detail/3`}>
                                The Best Street Style From Paris Fashion Week
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      */}
    </>
  );
}
