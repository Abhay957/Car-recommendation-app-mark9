import { useState } from "react";
import "./styles.css";
const carDictionary = {
  SUV: [
    { name: "Innova", Mileage: "Mileage:11km/hr" },
    { name: "Scorpio", Mileage: "Mileage:15km/hr" }
  ],
  Sedan: [
    { name: "Hondacity", Mileage: "Mileage:13km/hr" },
    { name: "Verna", Mileage: "Mileage:15km/hr" }
  ],
  Hatchback: [
    { name: "Baleno", Mileage: "Mileage:23km/hr" },
    { name: "Tiago", Mileage: "Mileage:25km/hr" }
  ]
};
export default function App() {
  const [clickedgenre, setgenre] = useState("SUV");
  function segmenticlickHandler(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "centre", padding: "1rem" }}>
        🚗Car<span style={{ color: "orange" }}>dekhlo</span>🚗
      </h1>
      <p
        style={{
          textAlign: "centre"
        }}
      >
        Checkout my favorite cars in each segment
      </p>
      <div>
        {Object.keys(carDictionary).map((genre) => (
          <button
            style={{
              padding: "0.3rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              border: "1px solid green",
              cursor: "pointer",
              borderRadius: "0.5rem",
              margin: "1rem",
              backgroundColor: "#d9f99d"
            }}
            onClick={() => segmenticlickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ maxWidth: "800px" }}></hr>
      <div>
        <ul>
          {carDictionary[clickedgenre].map((car) => (
            <li
              style={{
                listStyle: "none",
                border: "1px solid green",
                padding: "2rem",
                maxWidth: "200px",
                marginInlineStart: "31rem",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem"
              }}
              key={car.name}
            >
              {" "}
              <div style={{ padding: "0.5rem" }}>{car.name}</div>
              <div>{car.Mileage}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
