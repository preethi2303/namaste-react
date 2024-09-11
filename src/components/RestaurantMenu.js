import Shimmer from './Shimmer';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams } from 'react-router-dom';
const RestaurantMenu = () => {
  console.log('lll',useParams())
  const {id} = useParams();

  //const id = 154891; // not able to extart from params fix this issue later 
  const restaurantMenuInfo = useRestaurantMenu(id)
 
  if(restaurantMenuInfo === null) return <Shimmer />

  const { name ,cuisines, costForTwoMessage} = restaurantMenuInfo?.cards[2].card.card.info
    return ( 
        <div className='text-center'>
          <h1 className='font-bold mt-6 mb-2 text-2xl'>{name}</h1>
          <h6 className='text-xl'>{cuisines.join(',')}</h6>

          <h1>{costForTwoMessage}</h1>
        </div>
    )
}
export default RestaurantMenu;