import React from "react";
import s from "./StarWars.module.css";

const StarWars = (props) => {
  return (
    <>
      <div className={s.center}>
        <div className={s.property_card}>
          <div>
            <div
              className={s.property_image}
              style={{
                backgroundImage: `url(${props.img || "none"})`,
                // backgroundColor: props.colorOne,
                // background: `linear-gradient(0deg, #fff 0%, #555 100%)`,
              }}
            >
              <div className={s.property_image_title}>
                <h5
                  style={{ color: props.good ? "blue" : "red" }}
                  className={s.h5_1}
                >
                  {/* {props.name} */}
                </h5>
              </div>
            </div>
          </div>
          <div
            className={s.property_description}
            style={{
              color: props.good ? "#ffffff" : "#f5ff00",
              backgroundColor: props.good ? "#5ba7ff" : "#ff6767",
            }}
          >
            <h5 className={s.h5}> {props.name} </h5>
            <p className={s.p}>{props.desc}</p>
            <div className=""> {props.gender === "male" ? "♂" : "♀"} </div>
            <h5 className={s.h5}>{props.Homeworld}</h5>
          </div>
          <a href="#">
            {/* <div className={s.property_social_icons}>
              I would usually put multipe divs inside here set to flex. Some
              people might use Ul li. Multiple Solutions
            </div> */}
          </a>
        </div>
      </div>
    </>
  );
};
export default StarWars;
