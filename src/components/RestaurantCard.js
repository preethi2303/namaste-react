import {CDN_URL} from '../utils/constants';

const RestaurantCard = (props) =>{
    // console.log(props)
 //    const {resName,cuisine,rating,time} = props; // destructing
 const resData = props.resData
 const {name,cuisines,avgRating,costForTwo} = resData?.info;  // 
      return (
         <div className="p-4 m-4 w-52 h-auto bg-gray-100 hover:bg-gray-200">
             <img alt='res-logo ' className="rounded-md w-40 h-32" src={CDN_URL+resData.info.cloudinaryImageId}></img>
             <h3 className='font-bold py-4 text-lg'>{name}</h3>
             <h4 className='w-auto flex text-balance'>{cuisines.join(',')}</h4>
             <h4>{avgRating}</h4>
             <h4>{costForTwo}</h4>
         </div>
     )
 }


//  Higher order function example below
 export const RestaurantCardPromoted = (RestaurantCard) =>{
    return (props) => {
        return (
        <div>   
            <label className='absolute left-3 p-1 m-1 bg-black text-white rounded-md'> Promoted</label>
            <RestaurantCard {...props}></RestaurantCard>
        </div>)
    }
 }

 export default RestaurantCard

