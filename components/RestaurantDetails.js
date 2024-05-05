import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerBody from "./ShimmerBody";
import { MENU_API } from "../utils/constants";

const RestaurantDetails = () => {
    const {resId} = useParams();
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
        MENU_API+resId
    );
    // const data = menuDetails;
    const json = await data.json();
    console.log(json.data);
    setResData(json.data);
  };
  
  if (resData === null) return <ShimmerBody/>
  
  const {name, avgRatingString, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info;
    const menuItems = resData?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

  return (<>
    <div>
      <h1>{name}</h1>
      <h3>{avgRatingString} Stars</h3>
      <h3>{costForTwoMessage}</h3>
    </div>
    <div className="menuList">
<ul>
    {menuItems.map((itemCard)=>(<li key={itemCard.card.info.id}>{itemCard.card.info.name} - Rs.{itemCard.card.info.price/100}</li>))}
</ul>
    </div>
    </>
  );
};
export default RestaurantDetails;
