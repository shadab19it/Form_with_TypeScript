import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './form.css';

const Main:React.FC = () =>{

    let info = {
        name: '',
        email: '',
        city: ''
    }

    const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
         info.name = e.target.value;
    } 
    const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
         info.email = e.target.value;
    } 
    const handleChangeCity = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
         info.city = e.target.value;
    } 

    const showInfo = () => {
        console.log('Name of User : ' + info.name);
        console.log('Email of User : ' + info.email);
        console.log('City : ' + info.city);
    }

    return(
        <div className="form-container">
        <div className="logo">
            logo
        </div>
        <h3>Request Access</h3>
        <p>Thanks for choosing us :)</p>
        <form className="form-content">
            <div className="inputfield">
                <span  className="icon"><FontAwesomeIcon icon={ faUser }/></span>
                <input type="text" name="name"  onChange={(e) => handleChangeName(e)} placeholder="Your Name" required></input>
            </div>
            <div className="inputfield">
                <span  className="icon"><FontAwesomeIcon icon={ faEnvelope }/></span>
                <input type="email" name="email"  onChange={(e)=> handleChangeEmail(e)}  placeholder="E-mail" required></input>
            </div>
            <div className="inputfield">
                <span  className="icon"><FontAwesomeIcon icon={ faSearchLocation }/></span>
                <div className="chose">
                  <select className="slt-option" defaultValue="Select Spark cluster region" required onChange={(e)=> handleChangeCity(e)} >
                      <option value="" >Select Spark cluster region</option>
                      <option value="Europe">Europe</option>
                      <option value="US West">US West</option>
                      <option value="US East ">US East</option>
                      <option value="Asia">Asia</option>
                      <option value="Australia">Australia</option>
                  </select>
                </div>
            </div>
            <div className="btnfield">
              <button type="button" className="Rbutton" onClick={()=>{showInfo()}}>Request Access</button>   
            </div>
        </form>   
      </div>

    );
}

export default Main;