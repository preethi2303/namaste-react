import UserClass from "./UserClass";
import User from "./user";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log('parent constructor')
    }
    render (){
        console.log('parent render')
            return (
                <div>About Us
                    {/* <User name={'preetidd (function)'}/> */}
                    <UserClass name={'preetiff (class)'} location={'bangalore'}/>
                </div>
        
            )
    }
    componentDidMount(){
        console.log('parent componentDidMount')
    }

}

// const About = () => {
//     return (
//         <div>About Us
//             <User name={'preetidd (function)'}/>
//             <UserClass name={'preetiff (class)'} location={'bangalore'}/>
//         </div>
        
//     )
// }

export default About