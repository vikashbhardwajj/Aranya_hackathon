import React, { useRef } from "react";
import products from "../data/products.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ProductDetail.scss";
import PageWrapper from "../components/PageWrapper";
import WavyText from "../components/WavyText";
import img1 from "../assets/images/eye.png";
import CustomCurosr from "../components/CustomCursor";

const ProductDetail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const boxRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const product = products.find((p) => p.id === param.id);

  if (!product) {
    return (
      <PageWrapper>
        <div className="product-detail">
          <h2>Product not found.</h2>
          <button
            className="bg-green-500 px-4 py-2"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="product-detail overflow-hidden">
      <div ref={boxRef} className="product_detail_wrapper ">
        <CustomCurosr
          targetRef={boxRef}
          className="flex items-center justify-center bg-purple-500/5 backdrop-blur-sm"
          size={160}
        >
          <p className="text-4xl">🌿</p>
        </CustomCurosr>

        <div className="page1 h-[30vh] md:h-[50vh]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line z-[50] cursor-pointer text-6xl"
          ></i>
          <div className="content md:gap-[1rem]">
            <h1 className="mb-7 text-[50px] -tracking-[3px] md:text-[8rem] lg:text-[12rem] lg:-tracking-[9px]">
              {product.name}
            </h1>

            <h2 className="overflow-hidden z-[45] rounded-full border px-4 py-1 text-base font-bold uppercase opacity-80">
              <WavyText text={product.category} />
            </h2>
          </div>
        </div>

        <div className="page2 flex flex-col gap-5 md:flex-row md:gap-0">
          <div className="left relative w-full md:w-1/2">
            <div className="iii eye-effect absolute h-[200px] w-[100px]">
              <img src={img1} alt="" />
            </div>

            <div className="page2_image">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full rounded object-cover"
              />
            </div>
          </div>

          <div className="right flex w-full flex-col justify-between gap-10 md:w-1/2 md:gap-0 md:px-4">
            <div className="top flex justify-between">
              <h3 className="w-[80%] text-2xl font-bold uppercase opacity-80 lg:w-[40%]">
                {product.description}
              </h3>
              <p className="w-fit text-end text-sm font-bold uppercase opacity-80 sm:text-base">
                No price, only purpose
              </p>
            </div>
            <div className="center md:text-end">
              <h3 className="inline-block text-2xl font-bold uppercase opacity-80 md:w-[80%] lg:w-[40%]">
                {product.intro}
              </h3>
            </div>

            <div className="bottom flex flex-col gap-5 md:flex-row md:justify-between">
              <div className="right_bottom_left">
                <h1 className="mb-3 text-2xl font-bold uppercase opacity-80">
                  Benifits
                </h1>
                {product.benefits.map((benefit, index) => (
                  <p
                    key={index}
                    className="text-lg font-bold uppercase opacity-70 sm:text-lg"
                  >
                    <span className="relative inline-block -translate-y-1">
                      .
                    </span>{" "}
                    {benefit}
                  </p>
                ))}
              </div>

              <div className="right_bottom_right">
                <button
                  className="px-4 py-2 z-[45] text-sm font-bold uppercase opacity-80"
                  style={{ ["--color"]: product.color }}
                >
                  <WavyText text={product.cta} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="page3 relative pb-[1rem] md:pb-[2rem]">
          <p className="absolute text-sm font-bold tracking-wider uppercase opacity-70">
            Aranya
          </p>
          <h1 className="mb-7 text-[70px] font-bold -tracking-[5px] md:text-[8rem] lg:text-[12rem] lg:-tracking-[9px]">
            Symbolic
          </h1>
          <h3 className="text-[2rem] md:text-[3rem] md:first-letter:ml-[7rem] lg:text-[4rem] lg:first-letter:ml-[17rem]">
            {product.symbolic}
          </h3>
        </div>

        <div className="page4 relative flex flex-col gap-6 pb-[1rem] md:flex-row md:p-[2rem] lg:gap-0">
          <div className="left w-full md:w-1/2">
            <h1 className="text-base font-bold uppercase opacity-70 md:opacity-80">
              Impact
            </h1>
            {product.impact.map((item, index) => (
              <p
                key={index}
                className="mt-4 text-[1.7rem] uppercase opacity-80 md:w-[85%] md:text-[2.5rem]"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="right w-full shadow-lg md:w-1/2">
            <img className="" src={product.image} alt="" />
          </div>
        </div>

        <div className="page5 relative flex flex-col gap-6 pb-[1rem] md:flex-row-reverse md:p-[2rem] lg:gap-0">
          <div className="left relative w-full md:w-1/2">
            <h1 className="text-base font-bold uppercase opacity-70 md:opacity-80 lg:text-end">
              Every Creation, A Cause
            </h1>
            <p className="mt-4 mb-10 text-[1.7rem] uppercase opacity-70 md:mb-0 md:pl-[1rem] md:text-[2.5rem] lg:text-end">
              By choosing this product, you’re not making a purchase — you’re
              making a promise. A promise to respect, restore, and reconnect
              with nature.
            </p>
            <a
              href="https://paudhshala.com/"
              target="_blank"
              className="cta-2 z-[45] absolute right-0 bottom-0 px-4 py-2 text-sm font-bold uppercase opacity-80"
              style={{ ["--color"]: product.color }}
            >
              <WavyText text={"Buy Now"} />
            </a>
          </div>
          <div className="right w-full shadow-lg md:w-1/2">
            <img className="" src={product.image} alt="" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductDetail;
