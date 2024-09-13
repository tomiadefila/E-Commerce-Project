import List from "../list/List";
import "./Clothing.css";
import { useState } from "react";
import { useEffect } from "react";


function Clothing() {
  const [list, setList] = useState([]);
  const fetchData = async function () {
    const response = await fetch("http://localhost:3000/Data/Clothing.json");
    const result = await response.json();

      setList(result);
  };
  useEffect(function () {
    fetchData();
  }, []);

  const sort = function () {
    const copy = Object.assign([],list)
    console.log("sortClicked")
    copy.sort(function (a,b) {
      if (a.titleClothing < b.titleClothing) return -1
      if (a.titleClothing > b.titleClothing) return 1
      return 0
    }) 
    setList(copy.reverse())
  }


  return (
    <div>
      <p className="p1">CLOTHING</p>
      <br />
      <br />

      <ul>
        <li onClick={sort}>A-z</li>
      </ul>

      <div className="cl-wrap">
        {list.map((list) => (
          <List
            key={list.titleKey}
            srcProps={list.srcClothing}
            altProps={list.altClothing}
            title={list.titleClothing}
            price={list.priceClothing}
          />
        ))}
      </div>
    </div>
  );
}

export default Clothing;
