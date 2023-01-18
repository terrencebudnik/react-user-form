import React from 'react';
import {  useParams } from 'react-router-dom';
import "../css/welcomepage.css"



const WelcomePage = () => {
    const { name } = useParams();
    
    

    return (
        <div className="welcome-container">
            <h1 className="welcome-header">Welcome, {name}!</h1>
       
        </div>
    );
}
export default WelcomePage;