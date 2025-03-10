import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import ShopSidebarRight from "@/components/shop/ShopSidebarRight";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop Right Sidebar || CallAPro - Ultimate Reactjs Ecommerce Template",
  description: "CallAPro - Ultimate Reactjs Ecommerce Template",
};
export default function ShopRightSidebarPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 /> <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <div className="heading text-center">New Arrival</div>
              <p className="text-center text-2 text_black-2 mt_5">
                Shop through our latest selection of Fashion
              </p>
            </div>
          </div>
        </div>
      </div>
      <ShopSidebarRight />
      <Footer1 />
    </>
  );
}
