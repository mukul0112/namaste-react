import ResCard from "./ResCard";
import { resData } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [filteredData,setFilteredData] = useState(resList);
  const [quickFilterBtn,setQuickFilterBtn] = useState("Top Restaurants");
  const [loading,setLoading] = useState(true);
  console.log(searchText);

  useEffect(()=>{
    fetchData();
   },[])

const fetchData = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json= await data.json();
  console.log(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setResList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredData(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setLoading(false);
}

  const handleClick = () => {
    if(quickFilterBtn=='Top Restaurants'){
      setQuickFilterBtn("All Restaurants")
      const topRes = resList.filter((res) => res?.info?.avgRating > 4);
      setFilteredData(topRes);
    }
    else{
     setQuickFilterBtn("Top Restaurants")
      setFilteredData(resList);
    }
  }
  return (
    loading ? <ShimmerBody/> :
    <div className="body">
      <div className="filter">
        <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="search-btn" onClick={(e)=>{
          const filterData=resList.filter((res)=>{
           return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
          })
          setFilteredData(filterData);
                }} >
          Search
        </button>
      <button className="topRes-btn" onClick={() => handleClick()}>
         {quickFilterBtn}
      </button>
      </div>
      <div className="resComponent">
        {filteredData.map((restaurant, index) => (
          <Link className="link" key={index} to={"/RestaurantDetails/"+restaurant.info.id}><ResCard resObj={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
