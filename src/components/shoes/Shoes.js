import List from "../list/List";
import "./Shoes.css";
import Ada_Sandal from "../images/shoesimages/Ada Sandal.png";
import Black_Donna_Pump from "../images/shoesimages/Black Donna Pump.png";
import Dena_Wedge from "../images/shoesimages/Dena Wedge.png";
import Donna_Pump from "../images/shoesimages/Donna Pump.png";
import Dara_Platform from "../images/shoesimages/Dara Platform.png";
import Iris_Mule from "../images/shoesimages/Iris Mule.png";
import Nova_Sandal from "../images/shoesimages/Nova Sandal.png";
import Ronna_Boot from "../images/shoesimages/Ronna Boot.png";
import Sury_Sandal from "../images/shoesimages/Sury Sandal.png";
import Tyra_Mule from "../images/shoesimages/Tyra Mule.png";
import Yesa_Slingback from "../images/shoesimages/Yesa Slingback.png";


const shoesArrayList = [
    {
        srcShoes: Ada_Sandal,
        altShoes: "Ada_Sandal pic",
        titleShoes: "Ada Sandal",
        priceShoes: "£459",
    },

    {
        srcShoes: Black_Donna_Pump,
        altShoes: "Black_Donna_Pump pic",
        titleShoes: "Black Donna Pump",
        priceShoes: "£459",
    },

    {
        srcShoes: Dena_Wedge,
        altShoes: "Dena_Wedge pic",
        titleShoes: "Dena Wedge",
        priceShoes: "£459",
    },

    {
        srcShoes: Donna_Pump,
        altShoes: "Donna_Pump pic",
        titleShoes: "Donna Pump",
        priceShoes: "£459",
    },

    {
        srcShoes: Dara_Platform,
        altShoes: "Dara_Platform pic",
        titleShoes: "Dara Platform",
        priceShoes: "£459",
    },

    {
        srcShoes: Iris_Mule,
        altShoes: "Iris_Mule pic",
        titleShoes: "Iris Mule",
        priceShoes: "£459",
    },

    {
        srcShoes: Nova_Sandal,
        altShoes: "Nova_Sandal pic",
        titleShoes: "Nova Sandal",
        priceShoes: "£459",
    },

    {
        srcShoes: Sury_Sandal,
        altShoes: "Sury_Sandal pic",
        titleShoes: "Sury_Sandal",
        priceShoes: "£459",
    },

    {
        srcShoes: Tyra_Mule,
        altShoes: "Tyra_Mule pic",
        titleShoes: "Tyra Mule",
        priceShoes: "£459",
    },

    {
        srcShoes: Yesa_Slingback,
        altShoes: "Yesa_Slingback pic",
        titleShoes: "Yesa_Slingback",
        priceShoes: "£459",
    },

    

];
function Shoes() {
    return (
        <div>
            <p className="p1">SHOES</p>
            <br />
            <br />

        <div className="sh-wrap">
            {shoesArrayList.map((list) => (
                <List 
                key={list.titleKey}
                srcProps={list.srcShoes}
                altProps={list.altShoes}
                title={list.titleShoes}
                price={list.priceShoes}
                />
            ))}
        </div>
    );

        </div>
    );

}

export default Shoes;