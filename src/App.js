import React, { useState, useEffect } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [state, setState] = useState('');
  const [occupation, setOccupation] = useState('');

  useEffect(() => {
    fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(response => response.json())
      .then(data => setStates(data));
    fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(response => response.json())
      .then(data => setOccupations(data));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name, email, message, state, occupation };
    // Use the `fetch` API or a library like `axios` to send a POST request to your server with the form data
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={event => setMessage(event.target.value)} />
        </label>
        <br />
        <label>
          State:
          <select value={state} onChange={event => setState(event.target.value)}>
            {states.map(state => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Occupation:
          <select value={occupation} onChange={event => setOccupation(event.target.value)}>
            {occupations.map(occupation => (
              <option key={occupation} value={occupation}>
                {occupation}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Send</button>
        </form>
    </div>
  )

};

export default SignupForm;