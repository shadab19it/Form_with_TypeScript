import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSettings } from '@fortawesome/free-solid-svg-icons';
import './header.css'

interface Props{
    brand: string,
    Tinfo:string
}

const Header:React.FC<Props> =(props)=>{
    return (
        <div className="header">
            <div className="brand">
               <h2><a href="https://gigahex.com/">{props.brand}</a></h2>
            </div>
           <div className="menu">
               <a href="https://gigahex.com/" title={props.Tinfo}>Tools</a>
               <a href="https://medium.com/gigahex">Blog</a>
           </div>
        </div>
    );

}


export default Header