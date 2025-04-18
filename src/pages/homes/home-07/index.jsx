import Testimonials from "@/components/common/Testimonials";
import Footer3 from "@/components/footers/Footer3";
import Header5 from "@/components/headers/Header5";

import Banner from "@/components/homes/home-7/Banner";
import Categories from "@/components/homes/home-7/Categories";
import Countdown from "@/components/homes/home-7/Countdown";
import Hero from "@/components/homes/home-7/Hero";
import Marquee from "@/components/homes/home-7/Marquee";
import Products from "@/components/homes/home-7/Products";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 7 || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function Homepage7() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header5 />
      <Hero />
      <Marquee />
      <Products />
      <Countdown />
      <Categories />
      <Banner />
      <Testimonials />
      <Footer3 />
    </>
  );
}
