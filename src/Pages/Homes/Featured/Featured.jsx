import React from "react";
import "./Featured.css";
import featuredImage from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div className="featured mb-10 bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="md:flex items-center justify-center bg-opacity-60 pb-20 pt-12 px-36 bg-slate-500">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-12 ">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
