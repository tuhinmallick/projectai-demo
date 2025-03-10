import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function SkinChange() {
  return (
    <section className="flat-spacing-27 bg_light-grey-4">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">See Results in 1 Week!</span>
        </div>
        <div
          id="image-compare"
          className="wow fadeInUp"
          data-wow-delay="0s"
          style={{ position: "relative" }}
        >
          <span
            style={{
              position: "absolute",
              bottom: "1rem",
              zIndex: 12,
              left: "1rem",
              background: "rgba(0, 0, 0, 0.33)",
              color: "white",
              borderRadius: 3,
              padding: "0.5rem 0.75rem",
              fontSize: "0.85rem",
            }}
          >
            Before
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "1rem",
              zIndex: 12,
              right: "1rem",
              background: "rgba(0, 0, 0, 0.33)",
              color: "white",
              borderRadius: 3,
              padding: "0.5rem 0.75rem",
              fontSize: "0.85rem",
            }}
          >
            After
          </span>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/skincare_before.jpg?v=1721263981&width=375"
                srcSet="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/skincare_before.jpg?v=1721263981&width=375"
                alt="Before Treatment"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/skincare_after.jpg?v=1721263981&width=750"
                srcSet="https://demo-ecomus-global3.myshopify.com/cdn/shop/files/skincare_after.jpg?v=1721263981&width=750"
                alt="After Treatment"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
