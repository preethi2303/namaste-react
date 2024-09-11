import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import resList from "../utils/mockdata"
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from './../utils/useOnlineStatus'
import { RestaurantCardPromoted } from './RestaurantCard'


const Body = () => {
    let [restaurantList, setRestaurantList] = useState([]);
    let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted1 = RestaurantCardPromoted(RestaurantCard);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296');
        const json = await data.json();
        setRestaurantList(resList);
        setFilteredRestaurantList(resList)
        // setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        // setFilteredRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        // console.log(filteredRestaurantList)
    }
    useEffect(() => {
        fetchData();
    }, [])

    if (!onlineStatus) {
        return <h1>You are offline</h1>
    }

    if (!restaurantList.length) {
        return <Shimmer />
    }


    return (
        <div className="body">
            <div className=" flex search-filter-container">
                <div className="search-container m-4 p-4">
                    <input className="border border-solid border-black" type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} /> <button className="px-4 bg-blue-400 m-4 rounded-md" onClick={() => {
                        const searchedRes = restaurantList.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        });
                        setFilteredRestaurantList(searchedRes);
                    }}>Search</button>
                </div>
                <div className="filter m-8 p-4">
                    <button className="bg-slate-400 px-2 rounded-md" onClick={
                        () => {
                            const filteredResList = restaurantList.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            setRestaurantList(filteredResList)
                        }
                    }>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap res-container" >

                {filteredRestaurantList.map((restaurant) => (
                    <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                        {restaurant?.info?.promoted ? <RestaurantCardPromoted1 resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                    </Link>))}

            </div>
        </div>
    )
}

export default Body