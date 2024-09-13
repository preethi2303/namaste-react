import Shimmer from './Shimmer';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams } from 'react-router-dom';
import {RestaurantCategory} from './RestaurantCategory'
import { useState } from 'react';
const RestaurantMenu = () => {
 
  const {id} = useParams();
  const [showIndex,setShowIndex]=useState(0)

  //const id = 154891; // not able to extart from params fix this issue later 
  const restaurantMenuInfo = useRestaurantMenu(id)
 
  if(restaurantMenuInfo === null) return <Shimmer />
//  console.log('menu',restaurantMenuInfo)
  const { name ,cuisines, costForTwoMessage} = restaurantMenuInfo?.cards[2].card.card.info;
 const category = restaurantMenuInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
 console.log('category',category)  
 return ( 
        <div className='text-center'>
          <h1 className='font-bold mt-6 mb-2 text-2xl'>{name}</h1>
          <h6 className='text-xl'>{cuisines.join(',')}</h6>
          <h1>{costForTwoMessage}</h1>
          {/* RestaurantCategory is a controlled component */}
          {category.map((c,index) => <RestaurantCategory 
                                        showCategoryList={showIndex === index ? true : false } 
                                        key={c.card.card.title}
                                        data ={c.card.card} 
                                        setIndex = {(index) =>setShowIndex(index)}
                                      /> 
                          )}
        </div>
    )
}
export default RestaurantMenu;