import React, { useState, useEffect } from "react";
import "./Headphones.css";
import { Link } from "react-router-dom";

function Headphones() {
  const [headphones, setHeadphones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setHeadphones(data))
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, []);

  if (error) {
    return <div>Xato: {error.message}</div>;
  }

  const filteredHeadphones = headphones.filter(
    (headphone) => headphone.category === "headphones"
  );

  return (
    <div className="headphones-container">
      <h1>Headphones</h1>
      <div className="headphones-list">
        {filteredHeadphones.reverse().map((headphone, index) => (
          <div className="card-headphone" key={headphone.id}>
            {index % 2 === 0 ? (
              <>
                <img src={headphone.image.desktop} alt="" width={540} />
                <div className="headphone-item">
                  <p className="text-new">
                    {headphone.new === true ? "NEW PRODUCT" : ""}
                  </p>
                  <h2 className="text-name">{headphone.name}</h2>
                  <p className="text-info">{headphone.description}</p>
                  <Link to={`/product/${headphone.id}`} className="see-product">
                    SEE PRODUCT
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="headphone-item">
                  <p className="text-new">
                    {headphone.new === true ? "NEW PRODUCT" : ""}
                  </p>
                  <h2 className="text-name">{headphone.name}</h2>
                  <p className="text-info">{headphone.description}</p>
                  <Link to={`/product/${headphone.id}`} className="see-product">
                    SEE PRODUCT
                  </Link>
                </div>
                <img src={headphone.image.desktop} alt="" width={540} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Headphones;
