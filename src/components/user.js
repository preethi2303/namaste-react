import { useState } from "react";
const User = ({name}) => {    
    const [count] = useState(0)
    const [count1] = useState(1)
    return (
            <div className="user-card">
                <h1>count {count}</h1>
                <h1>coun1t {count1}</h1>
                <h2>Name : {name}</h2>
                <h3>Location : bangalore</h3>
                <h3>contact : gmail.com</h3>
            </div>
        )
    
}
export default User;