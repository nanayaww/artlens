import React from "react";

export default function Card({ img, title, description }) {
  return (
    <div className=" max-w-70 px-5 py-3 bg-secondary border shadow-lg rounded-lg mb-5  ">
      <div className=" w-full flex justify-center gap-3 mb-3">
        <img className=" w-40" src={img} alt="" />
      </div>
      <div>
        <p className=" font-medium"> {title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
