import { Helmet } from "react-helmet-async";

const Secret = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Secret</title>
      </Helmet>
      <section>
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <img
              alt="daisy"
              src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
            />
          </div>
          <div className="diff-item-2">
            <img
              alt="daisy"
              src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </section>
      {/*  */}
      <section>  
        <div className="diff aspect-[16/9] my-24">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
              DAISY
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 grid place-content-center text-9xl font-black">
              DAISY
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </section>
    </div>
  );
};

export default Secret;
