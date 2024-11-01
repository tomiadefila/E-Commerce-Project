import List from "../list/List";
import "./Bags.css";
import { useState } from "react";
import { useEffect } from "react";

function Bags() {
  const [list, setList] = useState([]);
  const fetchData = async function () {
    const response = await fetch("np");
    const result = await response.json();

    setList(result);
  };
  useEffect(function () {
    fetchData();
  }, []);

  const togglelist = function () {
    const bagsList = document.getElementById("sortList");

    if (
      bagsList.style.display == "none" ||
      bagsList.style.display == ""
    ) {
      bagsList.style.display = "block";
    } else {
      bagsList.style.display = "none";
    }
  };

  const sort3 = function () {
    const copy3 = Object.assign([], list);
    console.log("sortClicked");
    copy3.sort(function (a, b) {
      if (a.priceBags < b.priceBags) return -1;
      if (a.priceBags > b.priceBags) return 1;
      return 0;
    });
    setList(copy3);
  };

  const sort4 = function () {
    const copy4 = Object.assign([], list);
    console.log("sortClicked");
    copy4.sort(function (a, b) {
      if (a.priceBags < b.priceBags) return -1;
      if (a.priceBags > b.priceBags) return 1;
      return 0;
    });
    setList(copy4.reverse());
  };

  const sort5 = function () {
    const copy5 = Object.assign([], list);
    console.log("sortClicked");
    copy5.sort(function (a, b) {
      if (a.titleBags < b.titleBags) return -1;
      if (a.titleBags > b.titleBags) return 1;
      return 0;
    });
    setList(copy5);
  };

  const sort6 = function () {
    const copy6 = Object.assign([], list);
    console.log("sortClicked");
    copy6.sort(function (a, b) {
      if (a.titleBags < b.titleBags) return -1;
      if (a.titleBags > b.titleBags) return 1;
      return 0;
    });
    setList(copy6.reverse());
  };


  return (
    <div>
      <p className="p1">BAGS</p>

      <button className="bg-button" onClick={togglelist}>
        Sort By
      </button>

      <ul className="bg-list" id="sortList">
        <li>Popularity</li>
        <li>Newest</li>
        <li onClick={sort3}>Price(Low-High)</li>
        <li onClick={sort4}>Price(High-Low)</li>
        <li onClick={sort5}>Name(A-Z)</li>
        <li onClick={sort6}>Name(Z-A)</li>
      </ul>

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
