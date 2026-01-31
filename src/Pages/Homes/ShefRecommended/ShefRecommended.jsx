import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import slide from "../../../assets/home/slide1.jpg";
const ShefRecommended = () => {
  return (
    <section>
      <SectionTitle
        subHeading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <section className="grid md:grid-cols-3 p-10">
        <div className="card bg-base-100 w-72 h-96 mt-5 mb-5 shadow-xl">
          <figure>
            <img src={slide} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title ml-10">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-orange-500 border-0 border-b-4 mt-4">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 h-96 mt-5 mb-5 shadow-xl">
          <figure>
            <img src={slide} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title ml-10">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline bg-slate-700 text-orange-500 border-0 border-b-4 mt-4">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 h-96 mt-5 mb-5 shadow-xl">
          <figure>
            <img src={slide} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title ml-10">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-orange-500 border-0 border-b-4 mt-4">
                Order Now
              </button>
            </div>
          </div>
        </div>
        
      </section>
    </section>
  );
};

export default ShefRecommended;
