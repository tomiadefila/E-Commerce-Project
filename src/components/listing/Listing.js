import List from "../list/List";
import "../clothing/Clothing.css";
import { useState } from "react";
import { useEffect } from "react";

function Listing(props) {
  const [list, setList] = useState([]);
  const fetchData = async function () {
    const response = await fetch(props.dataSource);
    const result = await response.json();
    result.forEach((element) => {
      element.value = parseInt(element.price.replace("£", ""));
    });

    setList(result);
  };
  useEffect(
    function () {
      fetchData();
    },
    [props.dataSource]
  );

  const togglelist = function () {
    const listingList = document.getElementById("sortList");

    if (
      listingList.style.display == "none" ||
      listingList.style.display == ""
    ) {
      listingList.style.display = "block";
    } else {
      listingList.style.display = "none";
    }
  };

  
  const sort = function (element, isReverse) {
    const copy = Object.assign([], list);
    console.log("sortClicked");
    copy.sort(function (a, b) {
      if (a[element] < b[element]) return -1;
      if (a[element] > b[element]) return 1;
      return 0;
    });
    if (isReverse) {
      setList(copy.reverse());
    } else {
      setList(copy);
    }
  };

  return (
    <div>
      <p className="p1">{props.title}</p>

      <button className="cl-button" onClick={togglelist}>
        Sort By
      </button>

      <ul className="cl-list" id="sortList">
        <li onClick={() => sort("rating", true)}>Popularity</li>
        <li>Newest</li>
        <li onClick={() => sort("value", false)}>Price(Low-High)</li>
        <li onClick={() => sort("value", true)}>Price(High-Low)</li>
        <li onClick={() => sort("title", false)}>Name(A-Z)</li>
        <li onClick={() => sort("title", true)}>Name(Z-A)</li>
      </ul>

      <div className="cl-wrap">
        {list.map((list) => (
          <List key={list.titleKey} list={list} />
        ))}
      </div>
    </div>
  );
}

export default Listing;
