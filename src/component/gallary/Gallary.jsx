import React, { useEffect, useState } from "react";
import "./Gallary.css";
import PhotoCart from "./PhotoCart";

const Gallary = () => {
  const [travel, setTravel] = useState([]);
  const [wedding, setWedding] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("utility/data/g.json")
      .then((res) => res.json())
      .then((data) => {
        let x = data.filter((x) => x.title == "Travel");
        setTravel(x);
        x = data.filter((x) => x.title == "Wedding");
        setWedding(x);
        x = data.filter((x) => x.title == "Product photo");
        setProduct(x);
      });
  }, []);

  return (
    <div>
      <div id="travel" className="gallary-container">
          <h2 className="gallary-title">Travel</h2>
        <div className="photo-container">
        {travel.map((x) => (
          <PhotoCart key={x.id} photo={x}></PhotoCart>
        ))}
        </div>
      </div>
      <div id="product" className="gallary-container">
          <h2 className="gallary-title">Product Photo</h2>
        <div className="photo-container">
        {product.map((x) => (
          <PhotoCart key={x.id} photo={x}></PhotoCart>
        ))}
        </div>
      </div>
      <div id="wedding" className="gallary-container">
          <h2 className="gallary-title">Wedding</h2>
        <div className="photo-container">
        {wedding.map((x) => (
          <PhotoCart key={x.id} photo={x}></PhotoCart>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
