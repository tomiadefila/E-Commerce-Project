import List from "../list/List";
import "./Bags.css";
import { useState } from "react";
import { useEffect } from "react";

function Bags() {
  const [list, setList] = useState([]);
  const fetchData = async function () {
    const response = await fetch("http://localhost:3000/Data/Bags.json");
    const result = await response.json();

    setList(result);
  };
  useEffect(function () {
    fetchData();
  }, []);

  return (
    <div>
      <p className="p1">BAGS</p>
      <br />
      <br />

      <div className="bg-wrap">
        {list.map((list) => (
          <List
            key={list.titleKey}
            srcProps={list.srcBags}
            altProps={list.altBags}
            title={list.titleBags}
            price={list.priceBags}
          />
        ))}
      </div>
    </div>
  );
}

export default Bags;
