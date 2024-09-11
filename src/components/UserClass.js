import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log('child constructor')
        console.log(props);
         this.state = {
            userInfo:{}
        }
    }
   
    render (){
        console.log('child render')
        const {name,location,avatar_url} = this.state.userInfo
       // const {count,count2} = this.state
        return (
            <div className="user-card">
                {/* <h1>count {count}</h1> */}
                {/* <button onClick={ () => {
                    this.setState({count : count + 1})
                }}>Count Increase</button> */}
                {/* <h1>count1 {count2}</h1> */}
                <h2>Name : {name}</h2>
                <h3>Location : {location }</h3>
                <h3>contact : gmail.com</h3>
                <img src={avatar_url}/>
            </div>
        )
    }

    async componentDidMount(){
        // console.log('child componentDidMount')
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json();
        console.log(json , 'ppp')
        this.setState({userInfo : json})
    }
}

export default UserClass;