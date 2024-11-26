import React from "react";
import "../styles/index.css";

export default function ChefsCard({ name, lname, img, specialty, experience }) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">
          {name} {lname}
        </h2>
        <img className="circle-img" src={img} alt={name} />
      </div>
      <div className="bottom">
        <p className="specialty">Speciality: {specialty}</p>
        <p className="experience">Years of experience: {experience}</p>
      </div>
    </div>
  );
}
