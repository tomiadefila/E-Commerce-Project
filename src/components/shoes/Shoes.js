import List from "../list/List";
import "./Shoes.css";
import { useState } from "react";
import { useEffect } from "react";


function Shoes() {
  const [list, setList] = useState([]);
  const fetchData = async function () {
    const response = await fetch("http://localhost:3000/Data/Shoes.json");
    const result = await response.json();

    setList(result);
  };
  useEffect(function () {
    fetchData();
  }, []);

  return (
    <div>
      <p className="p1">SHOES</p>
      <br />
      <br />

      <div className="sh-wrap">
        {list.map((list) => (
          <List
            key={list.titleKey}
            srcProps={list.srcShoes}
            altProps={list.altShoes}
            title={list.titleShoes}
            price={list.priceShoes}
          />
        ))}
      </div>
    </div>
  );
}

export default Shoes;
