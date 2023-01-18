import React from 'react';
import "../css/button.css"


const Button = ({ toggleForm }) => {

    return (
        <div className="button-container">
            <button className="modal-button" onClick={toggleForm} >Click HERE to Get Started</button>
        </div>



    )
};
export default Button;