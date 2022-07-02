import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Promo from "./Promo";

export default function Promos() {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    function getPromos() {
      axios
        .get("http://localhost:5000/promotions")
        .then((res) => {
          setPromos(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getPromos();
  }, []);

  return (
    <div>
      {promos.map((promo, index) => {
        return (
          <Promo
            key={promo.id}
            code={promo.promoCode}
            title={promo.promoTitle}
            item={promo.promoItem}
            date={promo.date}
            desc={promo.desc}
          />
        );
      })}
    </div>
  );
}
