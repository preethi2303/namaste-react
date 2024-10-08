import { LOGO_URL} from './../utils/constants'; 
import { useContext, useEffect, useState } from "react";
import { Link} from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Header =() => {
    const [btnName,setBtnName] = useState('Login');
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between bg-slate-100 shadow">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}></img>
            </div>
            <div className="flex align-center">
                <ul className='flex m-4 p-4 align-center'>
                    <li className='px-4'><Link to='/'>Home</Link></li>
                    <li className='px-4'><Link to='/about'>About Us</Link></li>
                    <li className='px-4'><Link to='/contactUs'>Contact Us</Link></li>
                    <li className='px-4'>Cart</li>
                    <li className='px-4'><button onClick={ () =>{
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }}>{btnName}</button></li>
                    {/* getting loggedInuser user data through context */}
                     <li className='px-4 font-bold'>{loggedInUser}</li> 
                </ul>
            </div>

        </div>
    );

}

export default Header