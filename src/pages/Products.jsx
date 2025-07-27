import PageWrapper from "../components/PageWrapper";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import vid1 from "../assets/videos/vid4.mp4";
import "../styles/Products.scss";
import { Helmet } from "react-helmet-async";

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Explore Nature-Inspired Creations | Aranya Products</title>
        <meta
          name="description"
          content="Browse Aranya’s collection of sacred elements and nature-infused products. Every creation is a tribute to the Earth."
        />
        <meta
          name="keywords"
          content="Aranya products, eco-friendly items, nature creations, sustainable gifts, sacred elements"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Aranya Products – Inspired by Nature"
        />
        <meta
          property="og:description"
          content="A handpicked collection of sacred and healing creations, crafted with love for nature."
        />
        <meta
          property="og:image"
          content="https://aranya-five.vercel.app/products-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://aranya-five.vercel.app/products"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nature-Inspired Products by Aranya"
        />
        <meta
          name="twitter:description"
          content="Each item is a silent prayer to Mother Nature."
        />
        <meta
          name="twitter:image"
          content="https://aranya-five.vercel.app/products-cover.jpg"
        />
      </Helmet>

      <PageWrapper className="products">
        <div className="products-page-wrapper">
          <div className="product_page_1">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              src={vid1}
            ></video>
            <div className="grain-overlay pointer-events-none absolute inset-0 z-10"></div>

            <div className="page_1_content absolute bottom-0 left-0 flex h-50 w-full items-center justify-center px-4 md:justify-between md:px-8">
              <div className="first-content hidden md:block">
                <h1 className="text-xl font-bold">Just One Chapter</h1>

                <p className="mb-1 text-lg font-medium text-gray-300">
                  Sundarban
                </p>
                <p className="mb-1 text-lg font-medium text-gray-300">
                  Spiti Valley
                </p>
                <p className="mb-1 text-lg font-medium text-gray-300">
                  Sacred Grove of Mawphlang
                </p>
                <p></p>
              </div>
              <div
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight * 0.6,
                    behavior: "smooth",
                  })
                }
                className="second-content flex cursor-pointer items-center justify-center bg-black/30 px-4 py-2"
              >
                <h3>Creations</h3>
                <i className="ri-arrow-down-wide-fill ml-4 text-4xl text-white"></i>
              </div>
              <div className="third-content hidden md:block">
                <h1 className="text-xl font-bold">Chapter Unveiled</h1>
                <p className="text-lg font-medium text-gray-300">
                  Where silence gives shape to story.
                </p>
                <p className="text-lg font-medium text-gray-300">
                  Each region, a verse in Nature’s hymn.
                </p>
                <p className="text-lg font-medium text-gray-300">
                  A land where roots remember everything.
                </p>
                <p className="text-lg font-medium text-gray-300">
                  The story begins where footsteps end.
                </p>
              </div>
            </div>
          </div>

          <div className="product_page_2 relative p-[1rem] md:p-[2rem]">
            <p className="absolute text-sm font-bold tracking-wider uppercase opacity-70">
              Bloomarg
            </p>
            <h1 className="mb-7 text-[70px] -tracking-[5px] md:text-[8rem] lg:text-[12rem] lg:-tracking-[9px]">
              Products
            </h1>
            <h3 className="first-h3 text-[2rem] md:text-[3rem] md:first-letter:ml-[7rem] lg:text-[4rem] lg:first-letter:ml-[17rem]">
              The original creator never sold anything — offering its beauty
              with no expectation.
            </h3>
            <h3 className="text-[2rem] md:text-[3rem] lg:text-[4rem]">
              Every product reflects the selfless rhythm of the Earth, rooted in
              love and life.
            </h3>
          </div>

          <div className="product_page_3">
            <ProductCard />
          </div>

          <div className="product_page_4 relative p-[1rem] md:p-[2rem]">
            <p className="absolute text-sm font-bold tracking-wider uppercase opacity-70">
              Bloomarg
            </p>
            <h1 className="page-4-head mb-7 text-[70px] font-bold -tracking-[5px] md:text-[8rem] lg:text-[12rem] lg:-tracking-[9px]">
              Bloom
            </h1>
            <h3 className="page-4-para text-[2rem] md:text-[3rem] md:first-letter:ml-[7rem] lg:text-[4rem] lg:first-letter:ml-[17rem]">
              This is our tribute to the one influencer who creates only for the
              world’s wellbeing.
            </h3>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
