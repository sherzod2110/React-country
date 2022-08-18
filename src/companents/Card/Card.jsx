import React from "react";
import { Link } from "react-router-dom";

import "../Card/Card.css";

function Card({ data, dark }) {
  return (
    <div className={`${dark ? "" : "wwww"}`}>
      <div className="container py-4">
        <ul className="list d-flex align-items-center flex-wrap justify-content-around">
          {data.map((el) => {
            return (
              <li
                className={`${
                  dark
                    ? "list-item mb-4 "
                    : "list-item-1  mb-4  wwww"
                }`}
                key={el.name}
              >
                <Link
                  className="text-decoration-none"
                  to={"/countries/" + el.name}
                >
                  <img
                    src={el.flags.png}
                    alt={el.name.official}
                    width={268}
                    height={160}
                  />
                  <div className="px-4 pt-4">
                    <h2 className={`${dark? "heading" :"heading text-white"}`}>{el.name}</h2>

                    <p className={`${dark ? "text-pop": "text-pop text-white"}`}>
                      Population:{" "}
                      <span className={`${dark ?"text-font" : "text-font text-primary"}`}>{el.population}</span>
                    </p>
                    <p className={`${dark ? "text-pop": "text-pop text-white"}`}>
                      Region: <span className={`${dark ?"text-font" : "text-font text-primary"}`}>{el.region}</span>
                    </p>
                    <p className={`${dark ? "text-pop": "text-pop text-white"}`}>
                      Capital: <span className={`${dark ?"text-font" : "text-font text-primary"}`}>{el.capital}</span>
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Card;
