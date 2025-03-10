import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { aboutLinks, footerLinks, paymentImages } from "@/data/footerLinks";
export default function Footer6() {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-moblie");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");

      parent.classList.toggle("open");
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount
  return (
    <footer id="footer" className="footer md-pb-70">
      <div className="footer-wrap wow fadeIn" data-wow-delay="0s">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <Link to={`/`}>
                      <img
                        alt="image"
                        src="/images/logo/logo.svg"
                        width={136}
                        height={21}
                      />
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Address: Mönckebergstraße 7, <br />
                        20095 Hamburg, Germany
                      </p>
                    </li>
                    <li>
                      <p>
                        Email: <a href="#">info@callapro.ai</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Phone: <a href="#">+49 40 1234567</a>
                      </p>
                    </li>
                  </ul>
                  <Link to={`/contact-1`} className="tf-btn btn-line">
                    Get direction
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                  <ul className="tf-social-icon d-flex gap-10">
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-facebook social-line"
                      >
                        <i className="icon fs-14 icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-twiter social-line"
                      >
                        <i className="icon fs-12 icon-Icon-x" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-instagram social-line"
                      >
                        <i className="icon fs-14 icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-tiktok social-line"
                      >
                        <i className="icon fs-14 icon-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-pinterest social-line"
                      >
                        <i className="icon fs-14 icon-pinterest-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Help</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Help</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="footer-menu_item">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>About us</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>About us</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  {aboutLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="footer-menu_item">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-newsletter footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6>Follow us</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6>Follow us</h6>
                  </div>
                  <ul className="footer-menu-list tf-collapse-content">
                    <li>
                      <a href="#" className="footer-menu_item">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-menu_item">
                        Pinterest
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-menu_item">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-menu_item">
                        Spotify
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">
                    © {new Date().getFullYear()} CallAPro. All Rights
                    Reserved
                  </div>
                  <div className="tf-payment">
                    {paymentImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
