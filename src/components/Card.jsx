import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.imageUrl} />
      <div className="card--info">
        <p>
          <span>
            <img
              className="card--info_location_pin"
              src="../images/location_icon.png"
            />
          </span>
          <span className="card--info_country">{props.location}</span>{" "}
          <span className="card--info_map_taxt">View on Google Maps</span>
        </p>
        <h1>{props.title}</h1>
        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
