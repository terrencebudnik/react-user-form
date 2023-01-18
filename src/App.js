import React, { useState } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";
import ContactForm from './components/ContactForm';



function App() {
  const [contactForm, setContactForm] = useState(false);

  const toggleForm = () => {
    setContactForm(!contactForm);
  }

  return (
    <div>
      <Header />
      <Button toggleForm={toggleForm} />
      <ContactForm toggleForm={toggleForm} contactForm={contactForm}/>
    </div>
  );
}

export default App;






