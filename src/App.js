import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from './components/RestaurantMenu';
//import UserContext from  './utils/UserContext';
import UserContext from "./utils/UserContext";

//const heading = React.createElement('h1',{id:"heading1"},'hello world from react');
//const root =  ReactDOM.createRoot(document.getElementById('root'));
//const parent = React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},
//[React.createElement('h1',{},'i am h1 tag'),React.createElement('h1',{},'i am h1 tag')]))

//  const heading = (<h1 id="heading" className='test'>Hello React</h1>);
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(heading)

//function based component
// const Title = () =>(
//     <h1 className="heading">Namsate React</h1>
// )
// const HeadingComponent = () =>(
//     <div id='container'>
//         <Title/>
//         <h1 className='head'>react functional component</h1>
//     </div>
// ) 

const About = lazy(() => import("./components/About"))
const AppLayout = () =>{
    const [userName,setUserName] = useState();

    useEffect(() => {

      // make a api call and get the data
      const data = {name : 'preeti'}
      setUserName(data.name);
    },[])

    return (
    <UserContext.Provider value ={{loggedInUser:userName,setUserName}}>
    <div className="app" >
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>  
    )
}

const appRoute = createBrowserRouter([
  { 
    path:'',
    element:<AppLayout />,
    errorElement:<Error/>,
    children : [
      {
        path : '/',
        element: <Body />
      },{
        path : '/about',
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
      },
      {
        path : '/contactUs',
        element : <Contact />
      },
      {
        path: '/restaurant/:id',
        element : <RestaurantMenu/>
      }
    ]
  }
 ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>);

