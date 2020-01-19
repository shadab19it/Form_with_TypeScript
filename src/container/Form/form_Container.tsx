import React from 'react';
import Main from './Content/form_main'
import Footer from './Content/form_footer';
import './form_Container.css';



const Form:React.FC = ()=>{
  return(
    <div className="FmContainer">
      <Main />
      <Footer brand="Gigahex" />
    </div>
  
  )
}

export default Form;