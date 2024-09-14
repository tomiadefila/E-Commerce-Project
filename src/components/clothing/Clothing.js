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

  const togglelist = function() {
    const clothingList = document.getElementById("sortList");

    if (
      clothingList.style.display == "none" ||
      clothingList.style.display == ""
    ) {
      clothingList.style.display = "block";
    } else {
      clothingList.style.display = "none";
    }
  }

  const sort3 = function () {
    const copy3 = Object.assign([], list);
    console.log("sortClicked");
    copy3.sort(function (a, b) {
      if (a.priceClothing < b.priceClothing) return -1;
      if (a.priceClothing > b.priceClothing) return 1;
      return 0;
    });
    setList(copy3);
  };

  const sort4 = function () {
    const copy4 = Object.assign([], list);
    console.log("sortClicked");
    copy4.sort(function (a, b) {
      if (a.priceClothing < b.priceClothing) return -1;
      if (a.priceClothing > b.priceClothing) return 1;
      return 0;
    });
    setList(copy4.reverse());
  };


  const sort5 = function () {
    const copy5 = Object.assign([], list);
    console.log("sortClicked");
    copy5.sort(function (a, b) {
      if (a.titleClothing < b.titleClothing) return -1;
      if (a.titleClothing > b.titleClothing) return 1;
      return 0;
    });
    setList(copy5);
  };

  const sort6 = function () {
    const copy6 = Object.assign([],list)
    console.log("sortClicked")
    copy6.sort(function (a,b) {
      if (a.titleClothing < b.titleClothing) return -1
      if (a.titleClothing > b.titleClothing) return 1
      return 0
    }) 
    setList(copy6.reverse())
  }


  return (
    <div>
      <p className="p1">CLOTHING</p>
      <br />
      <br />
      
        <button className="cl-button" onClick={togglelist} >Sort By</button>
      
      <ul className="cl-list" id="sortList">
        <li>Popularity</li>
        <li>Newest</li>
        <li onClick={sort3}>Price(Low-High)</li>
        <li onClick={sort4}>Price(High-Low)</li>
        <li onClick={sort5}>Name(A-Z)</li>
        <li onClick={sort6}>Name(Z-A)</li>
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
