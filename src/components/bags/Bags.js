import List from "../list/List";
import "./Bags.css";
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





        const bagsArrayList = [
    {
        srcBags: Alita_Top_Handle,
        altBags: "Alita_Top_Handle pic",
        titleBags: "Alita Top Handle",
        priceBags: "£459",
    },

    {
        srcBags: Ark_Crossbody,
        altBags: "Ark_Crossbody pic",
        titleBags: "Ark Crossbody",
        priceBags: "£459",
    },

    {
        srcBags: Cali_Clutch,
        altBags: "Cali_Clutch pic",
        titleBags: "Cali Clutch",
        priceBags: "£459",
    },

    {
        srcBags: Fana_Pearl_Bag,
        altBags: "Fana_Pearl_Bag",
        titleBags: "Fana Pearl Bag",
        priceBags: "£459",
    },

    {
        srcBags: Lola_Shoulder,
        altBags: "Lola_Shoulder pic",
        titleBags: "Lola Shoulder",
        priceBags: "£459",
    },

    {
        srcBags: Mimi_Bag,
        altBags: "Mimi_Bag pic",
        titleBags: "Mimi Bag",
        priceBags: "£459",
    },

    {
        srcBags: Odette_Tote,
        altBags: "Odette_Tote pic",
        titleBags: "Odette Tote",
        priceBags: "£459",
    },

    {
        srcBags: Sade_Tote_Bag,
        altBags: "Sade_Tote_Bag pic",
        titleBags: "Sade Tote Bag",
        priceBags: "£459",
    },

    {
        srcBags: Vina_Tote,
        altBags: "Vina_Tote pic",
        titleBags: "Vina Tote",
        priceBags: "£459",
    },

    {
        srcBags: Zuca_Top_Handle,
        altBags: "Zuca_Top_Handle pic",
        titleBags: "Zuca Top Handle",
        priceBags: "£459",
    },

    

];
function Bags() {
    return (
        <div>
            <p className="p1">BAGS</p>
            <br />
            <br />

        <div className="bg-wrap">
            {bagsArrayList.map((list) => (
                <List 
                key={list.titleKey}
                srcProps={list.srcBags}
                altProps={list.altBags}
                title={list.titleBags}
                price={list.priceBags}
                />
            ))}
        </div>
    );

        </div>
    );

}

export default Bags;