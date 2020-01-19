import React from 'react';
import './form.css';

const Footer:React.FC<{brand:string}>=(props)=>{
    return (
    <footer className="footer">
        <p className="fText">{props.brand}.com &copy;2020 All rights Reserved</p>
    </footer>

    )
}

export default Footer;