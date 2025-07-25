import React, { useRef } from "react";
import CustomCurosr from "./CustomCursor";
import products from "../data/products.json";
import "../styles/ProductCards.scss";
import { NavLink } from "react-router-dom";

const ProductCard = () => {
  const boxRef = useRef(null);

  return (
    <div className="main-container h-[100%] w-[100%] py-1">
      <div
        ref={boxRef}
        className="product-wrapper flex w-full flex-wrap overflow-hidden border-y"
      >
        <CustomCurosr
          targetRef={boxRef}
          className="flex items-center justify-center bg-black"
          size={150}
        >
          <i className="ri-arrow-right-up-line text-4xl text-white"></i>
        </CustomCurosr>

        {products.map((product, index) => {
          return (
            <NavLink
              to={`/product/${product.id}`}
              key={index}
              className={`product-card relative flex h-fit w-full gap-5 lg:w-1/2`}
              style={{ ["--after-bg"]: product.color }}
            >
              <div className="product-image flex-shrink overflow-hidden sm:h-[200px] sm:w-[200px] md:h-[200px] md:w-[200px] lg:h-[280px] lg:w-[280px]">
                <img
                  src={`${product.image}`}
                  alt={`Product ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="product-right flex flex-1 flex-col-reverse justify-between lg:flex-col">
                <div className="product-right-top flex items-center justify-between">
                  <h2 className="rounded-full border px-4 py-1 text-base font-bold uppercase opacity-80">
                    {product.category}
                  </h2>
                  <div className="brand">
                    <h3 className="uppercase">Aranya/</h3>
                    <h3 className="uppercase">Showcase/</h3>
                    <h3 className="uppercase"> Feel it</h3>
                  </div>
                </div>

                <div className="product-info">
                  <h3 className="text-4xl uppercase"> {product.id} </h3>
                  <p className="text-lg">{product.description} </p>
                 
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;

/*  <div  className="flex relative h-screen w-full items-center justify-center bg-gray-100">
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden rounded-md bg-yellow-200"
      >
        <CustomCurosr targetRef={containerRef} className="bg-red-500" />
        <h2 className="pt-28 text-center font-bold">Hover here</h2>
      </div>
    </div> 
    
    
    
    
    */

// 550 px meida screen for product card responsive design
