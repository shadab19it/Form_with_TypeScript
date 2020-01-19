import React from 'react';
import './App.css';
import Header from './container/header/header'
import Form from './container/Form/form_Container';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header brand="Gigahex" Tinfo="Spark Command Builder" />
      <Form />
    </div>
  );
}

export default App;
