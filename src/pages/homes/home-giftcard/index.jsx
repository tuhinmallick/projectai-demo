import Footer1 from "@/components/footers/Footer1";
import Header5 from "@/components/headers/Header5";
import BestSell from "@/components/homes/home-giftcard/BestSell";
import Blog from "@/components/homes/home-giftcard/Blog";
import Card from "@/components/homes/home-giftcard/Card";
import Categories from "@/components/homes/home-giftcard/Categories";
import Collection from "@/components/homes/home-giftcard/Collection";
import Features from "@/components/homes/home-giftcard/Features";
import Hero from "@/components/homes/home-giftcard/Hero";
import Marquee from "@/components/homes/home-giftcard/Marquee";
import Products from "@/components/homes/home-giftcard/Products";
import Testimonials from "@/components/homes/home-giftcard/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Giftcard || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeGiftcardPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header5 />
      <Hero />
      <Card />
      <Products />
      <Features />
      <Categories />
      <Marquee />
      <BestSell />
      <Collection />
      <Testimonials />
      <Blog />
      <Footer1 />
    </>
  );
}
