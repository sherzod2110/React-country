import "../Pages/Single.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import back from "../../assets/call-made.svg";

const SingleCountry = ({ dark }) => {
  console.log(dark);
  const [data, setData] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();
  const URL = `https://restcountries.com/v2/name/${name}`;
  const getData = async () => {
    const request = await fetch(URL);
    const response = await request.json();
    setData(response);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={`${
        dark
          ? "list-unstyled  m-0 p-0"
          : "list-unstyled m-0 p-0 dsfgref qoraa "
      }`}
    >
      <div className="container ">
        <div className="inner_card">
          {data.map((item) => {
            return (
              <li key={item.name} className=" w-100 ms-5 pt-4">
                <div>
                  <button
                    className="btn-inner d-flex align-items-center ps-4 border-0"
                    onClick={() => navigate(-1)}
                  >
                    <img className="me-2" src={back} alt="" />
                    <p className="m-0">Back</p>
                  </button>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <img
                    src={item.flags.svg}
                    alt=""
                    className="img-inn"
                    width={500}
                    height={360}
                  />
                  <div>
                    <h3
                      className={`${
                        dark ? "text-inner" : "text-inner text-white"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className={`${dark}`}>
                      <span
                        className={`${
                          dark ? "text-inner" : "text-inner text-white"
                        }`}
                      >
                        {`Native Name: `}{" "}
                      </span>
                      <span
                        className={`${
                          dark ? "text-inner-2" : "text-inner-2 text-danger"
                        }`}
                      >
                        {item.nativeName}
                      </span>
                    </p>
                    <p
                      className={`${
                        dark ? "text-inner" : "text-inner text-white"
                      }`}
                    >
                      {`Region: `}{" "}
                      <span
                        className={`${
                          dark ? "text-inner-2" : "text-inner-2 text-danger"
                        }`}
                      >
                        {item.region}
                      </span>
                    </p>
                    <p
                      className={`${
                        dark ? "text-inner" : "text-inner text-white"
                      }`}
                    >
                      {`Population: `}{" "}
                      <span
                        className={`${
                          dark ? "text-inner-2" : "text-inner-2 text-danger"
                        }`}
                      >
                        {item.population}
                      </span>
                    </p>
                    <p
                      className={`${
                        dark ? "text-inner" : "text-inner text-white"
                      }`}
                    >
                      {`Capital:`}{" "}
                      <span
                        className={`${
                          dark ? "text-inner-2" : "text-inner-2 text-danger"
                        }`}
                      >
                        {item.capital}
                      </span>
                    </p>
                    <p
                      className={`${
                        dark ? "text-inner" : "text-inner text-white"
                      }`}
                    >
                      {`Language:`}{" "}
                      <span
                        className={`${
                          dark ? "text-inner-2" : "text-inner-2 text-danger"
                        }`}
                      >
                        {item.languages[0].name}, {item.languages[0].nativeName}
                        , {item.languages[0].iso639_2}
                      </span>
                    </p>
                    {/* <p className="text-inner d-flex gap-4 align-items-center">
                      {`Border Countries: `}{" "}
                      <span className="text-inner-2 wqw text-center">{item.borders[0]}</span>
                    </p> */}
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
