import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/contactform.css';


const ContactForm = ({ toggleForm, contactForm }) => {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
  });

  

  useEffect(() => {
    axios.get('https://frontend-take-home.fetchrewards.com/form')
      .then(response => {
        setOccupations(response.data.occupations);
        setStates(response.data.states);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.occupation || !formData.state) {
      window.alert('Please fill out all fields before submitting.');
  } else {

    axios.post('https://frontend-take-home.fetchrewards.com/form', formData)
      .then(response => {
        if (response.status === 201) {
          console.log('User created successfully');
          window.location = `/welcome/${formData.name}`;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

}

  return (
    contactForm &&
      <div className='contact-form-container'>
        <h2 className='contact-form-header'>Create an Account</h2>
        <form className='contact-form'>
          
          <label>Full Name:
          <input
            id='contact-form-name'
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          </label>
          <br/>
          
          <label>Email:  
          <input
          id='contact-form-email'
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          </label>
          <br/>
          
          <label>Password:
          <input
          id='contact-form-password'
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          </label>
          <br/>
          
          <select
           id='contact-form-occupation'
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
          >
            <option value="">Select an Occupation</option>
            {occupations.map(occupation => (
              <option key={occupation} value={occupation}>
                {occupation}
              </option>
            ))}
          </select>
          <br/>
          
          <select
          id='contact-form-state'
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          >
            <option value="">Select a State</option>
            {states.map(state => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
          <br/>
          
          <button type="submit" onClick={handleSubmit}>
            Submit Information
          </button>

        </form>
        
        <button onClick={toggleForm}>Close</button>
      </div>
    
  );
};




export default ContactForm;

