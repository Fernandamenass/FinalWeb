import chefs from "../data/Chefs";
import React from "react";
import ChefsCard from "./ChefsCard";

export default function ChefSection() {
  return (
    <div className="app">
      <h1 className="title">Top Chefs</h1>
      <div className="card-container">
        {chefs.map((chef, index) => (
          <ChefsCard
            key={index}
            name={chef.name}
            lname={chef.lname}
            img={chef.picture}
            specialty={chef.specialty}
            experience={chef.experience}
          />
        ))}
      </div>
    </div>
  );
}
