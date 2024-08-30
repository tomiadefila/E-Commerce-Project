import List from "../list/List";
import "./Shop.css";
import Alita_Top_Handle from "../images/bagimages/Alita_Top_Handle.png";
import Ark_Crossbody from "../images/bagimages/Ark Crossbody.png";
import Cali_Clutch from "../images/bagimages/Cali Clutch.png";
import Fana_Pearl_Bag from "../images/bagimages/Fana Pearl Bag.png";
import Lola_Shoulder from "../images/bagimages/Lola Shoulder Bag.png";
import Mimi_Bag from "../images/bagimages/Mimi Bag.png";
import Odette_Tote from "../images/bagimages/Odette Tote.png";
import Sade_Tote_Bag from "../images/bagimages/Sade Tote Bag.png";
import Serena_Clutch from "../images/bagimages/Serena Clutch.png";
import Vina_Tote from "../images/bagimages/Vina Tote.png";
import Zuca_Top_Handle from "../images/bagimages/Zuca Top Handle.png";
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

const shopArrayList = [
    {
        srcShop: Pearl_Gown,
        altShop: "Pearl_Gown Pic",
        titleShop: " Pearl Gown",
        priceShop: "£1079",
    },

    {
        srcShop: Fana_Pearl_Bag,
        altShop: "Fana_Pearl_Bag",
        titleShop: "Fana Pearl Bag",
        priceShop: "£459",
    },

    {
        srcShop: Black_Donna_Pump,
        altShop: "Black_Donna_Pump pic",
        titleShop: "Black Donna Pump",
        priceShop: "£459",
    },

    {
        srcShop: Aka_Dress,
        altShop: "Aka_Dress pic",
        titleShop: "Aka Dress",
        priceShop: "£750",
    },

    {
        srcShop: Sade_Tote_Bag,
        altShop: "Sade_Tote_Bag pic",
        titleShop: "Sade Tote Bag",
        priceShop: "£459",
    },

    {
        srcShop: Ada_Skirt,
        altShop: "Ada_Skirt pic",
        titleShop: "Ada Skirt",
        priceShop: "£459",
    },

    {
        srcShop: Cali_Clutch,
        altShop: "Cali_Clutch pic",
        titleShop: "Cali Clutch",
        priceShop: "£459",
    },
    

    {
        srcShop: Black_BlazJacket,
        altShop: "Black_BlazJacket pic",
        titleShop: "Blaze Jacket",
        priceShop: "£459",
    },

    {
        srcShop: Bria_Top,
        altShop: "Bria_Top",
        titleShop: "Bria Top",
        priceShop: "£350",
    },

    
    {
        srcShop: Odette_Tote,
        altShop: "Odette_Tote pic",
        titleShop: "Odette Tote",
        priceShop: "£459",
    },


    {
        srcShop: Clara_Pant,
        altShop: "Clara_Pant Pic",
        titleShop: "Clara Pant",
        priceShop: "£359",
    },

    {
        srcShop: Diya_Coat,
        altShop: "Diya_Coat Pic",
        titleShop: "Diya Coat",
        priceShop: "£489",
    },

    {
        srcShop: Elle_Dress,
        altShop: "Elle_Dress Pic",
        titleShop: "Elle Dress ",
        priceShop: "£859",
    },

    {
        srcShop: Sury_Sandal,
        altShop: "Sury_Sandal pic",
        titleShop: "Sury_Sandal",
        priceShop: "£459",
    },

    {
        srcShop: Tyra_Mule,
        altShop: "Tyra_Mule pic",
        titleShop: "Tyra Mule",
        priceShop: "£459",
    },

    {
        srcShop: Gima_Top,
        altShop: "Gima_Top Pic",
        titleShop: "Gima Top ",
        priceShop: "£379",
    },

    {
        srcShop: Donna_Pump,
        altShop: "Donna_Pump pic",
        titleShop: "Donna Pump",
        priceShop: "£459",
    },

    {
        srcShop: Dara_Platform,
        altShop: "Dara_Platform pic",
        titleShop: "Dara Platform",
        priceShop: "£459",
    },



    {
        srcShop: Serena_Blazer,
        altShop: "Serena_Blazer Pic",
        titleShop: "Serena Blazer",
        priceShop: "£579",
    },

    {
        srcShop: Lola_Shoulder,
        altShop: "Lola_Shoulder pic",
        titleShop: "Lola Shoulder",
        priceShop: "£459",
    },

    {
        srcShop: Mimi_Bag,
        altShop: "Mimi_Bag pic",
        titleShop: "Mimi Bag",
        priceShop: "£459",
    },

    {
        srcShop: Ada_Sandal,
        altShop: "Ada_Sandal pic",
        titleShop: "Ada Sandal",
        priceShop: "£459",
    },

    {
        srcShop: Stacy_Pant,
        altShop: "Stacy_Pant Pic",
        titleShop: "Stacy Pant",
        priceShop: "£579",
    },

    {
        srcShop: Nova_Sandal,
        altShop: "Nova_Sandal pic",
        titleShop: "Nova Sandal",
        priceShop: "£459",
    },


    {
        srcShop: Yesa_Slingback,
        altShop: "Yesa_Slingback pic",
        titleShop: "Yesa_Slingback",
        priceShop: "£459",
    },

    {
        srcShop: Vera_Top,
        altShop: "Vera_Top Pic",
        titleShop: "Vera Top",
        priceShop:"£349",
    },

    {
        srcShop: Wura_Gown,
        altShop: "Wura Gown Pic",
        titleShop: "Wura Gown",
        priceShop: "£779",
    },
    

    {
        srcShop: Dena_Wedge,
        altShop: "Dena_Wedge pic",
        titleShop: "Dena Wedge",
        priceShop: "£459",
    },

    {
        srcShop: Iris_Mule,
        altShop: "Iris_Mule pic",
        titleShop: "Iris Mule",
        priceShop: "£459",
    },

    {
        srcShop: Alita_Top_Handle,
        altShop: "Alita_Top_Handle pic",
        titleShop: "Alita Top Handle",
        priceShop: "£459",
    },

    {
        srcShop: Ama_Dress,
        altShop: "Ama_Dress pic",
        titleShop: "Ama Dress",
        priceShop: "£679",
    },


    {
        srcShop: Ark_Crossbody,
        altShop: "Ark_Crossbody pic",
        titleShop: "Ark Crossbody",
        priceShop: "£459",
    },

    {
        srcShop: Vina_Tote,
        altShop: "Vina_Tote pic",
        titleShop: "Vina Tote",
        priceShop: "£459",
    },

    {
        srcShop: Kenny_Dress,
        altShop: "Kenny_Dress Pic",
        titleShop: "Kenny Dress ",
        priceShop: "£979",
    },

    {
        srcShop: Zuca_Top_Handle,
        altShop: "Zuca_Top_Handle pic",
        titleShop: "Zuca Top Handle",
        priceShop: "£459",
    },





];

function Shop() {
    return (
        <div>
        <p className="p1">SHOP ALL</p>

        
        <div className="shop-wrap">
            {shopArrayList.map((list) => (
                <List 
                key={list.titleKey}
                srcProps={list.srcShop}
                altProps={list.altShop}
                title={list.titleShop}
                price={list.priceShop}
                 />
            ))}
        </div>
        </div>
    );

}

export default Shop;
