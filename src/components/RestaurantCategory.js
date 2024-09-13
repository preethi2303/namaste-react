import { useState } from 'react'
import ResCategoryItemList from './ResCategoryItemList'

export const RestaurantCategory = ({data,showCategoryList,setIndex}) => {
    console.log(data)
    ////const [showCategoryList,setShowCategoryList] = useState(false)
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between" onClick={() =>{
                    setIndex(index)
                }}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>+</span>
                </div>
                {showCategoryList && <ResCategoryItemList items = {data.itemCards}/>}
            </div>
        </div>
    )
}