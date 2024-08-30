import List from "../list/List";
import "./Clothing.css";
import Ada_Skirt from "../images/clothingimages/Ada_Skirt.png";
import Aka_Dress from "../images/clothingimages/Aka _Dress.png";
import Ama_Dress from "../images/clothingimages/Ama_Dress.png";
import Black_BlazJacket from "../images/clothingimages/Black_BlazJacket.png";
import Bria_Top from "../images/clothingimages/Bria_Top.png";
import Clara_Pant from "../images/clothingimages/Clara_Pant.png";
import Diya_Coat from "../images/clothingimages/Diya_Coat.png";
import Elle_Dress from "../images/clothingimages/Elle_Dress.png";
import Gima_Top from "../images/clothingimages/Gima_Top.png";
import Kenny_Dress from "../images/clothingimages/Kenny_Dress.png";
import Pearl_Gown from "../images/clothingimages/Pearl_Gown.png";
import Serena_Blazer from "../images/clothingimages/Serena_Blazer.png";
import Stacy_Pant from "../images/clothingimages/Stacy_Pant.png";
import Vera_Top from "../images/clothingimages/Vera_Top.png";
import Wura_Gown from "../images/clothingimages/Wura_Gown.png";

const clothingArrayList = [
    {
        srcClothing: Ada_Skirt,
        altClothing: "Ada_Skirt pic",
        titleClothing: "Ada Skirt",
        priceClothing: "£459",
    },

    {
        srcClothing: Aka_Dress,
        altClothing: "Aka_Dress pic",
        titleClothing: "Aka Dress",
        priceClothing: "£750",
    },

    {
        srcClothing: Ama_Dress,
        altClothing: "Ama_Dress pic",
        titleClothing: "Ama Dress",
        priceClothing: "£679",
    },

    {
        srcClothing: Black_BlazJacket,
        altClothing: "Black_BlazJacket pic",
        titleClothing: "Blaze Jacket",
        priceClothing: "£459",
    },

    {
        srcClothing: Bria_Top,
        altClothing: "Bria_Top",
        titleClothing: "Bria Top",
        priceClothing: "£350",
    },

    {
        srcClothing: Clara_Pant,
        altClothing: "Clara_Pant Pic",
        titleClothing: "Clara Pant",
        priceClothing: "£359",
    },

    {
        srcClothing: Diya_Coat,
        altClothing: "Diya_Coat Pic",
        titleClothing: "Diya Coat",
        priceClothing: "£489",
    },

    {
        srcClothing: Elle_Dress,
        altClothing: "Elle_Dress Pic",
        titleClothing: "Elle Dress ",
        priceClothing: "£859",
    },

    {
        srcClothing: Gima_Top,
        altClothing: "Gima_Top Pic",
        titleClothing: "Gima Top ",
        priceClothing: "£379",
    },

    {
        srcClothing: Kenny_Dress,
        altClothing: "Kenny_Dress Pic",
        titleClothing: "Kenny Dress ",
        priceClothing: "£979",
    },

    {
        srcClothing: Pearl_Gown,
        altClothing: "Pearl_Gown Pic",
        titleClothing: " Pearl Gown",
        priceClothing: "£1079",
    },

    {
        srcClothing: Serena_Blazer,
        altClothing: "Serena_Blazer Pic",
        titleClothing: "Serena Blazer",
        priceClothing: "£579",
    },

    {
        srcClothing: Stacy_Pant,
        altClothing: "Stacy_Pant Pic",
        titleClothing: "Stacy Pant",
        priceClothing: "£579",
    },

    {
        srcClothing: Vera_Top,
        altClothing: "Vera_Top Pic",
        titleClothing: "Vera Top",
        priceClothing:"£349",
    },

    {
        srcClothing: Wura_Gown,
        altClothing: "Wura Gown Pic",
        titleClothing: "Wura Gown",
        priceClothing: "£779",
    },


];

function Clothing() {
    return (
        <div>
        <p className="p1">CLOTHING</p>
            <br />
            <br />
        
        <div className="cl-wrap">
            {clothingArrayList.map((list) => (
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
