import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validateEmail } from "./Helper";
function Contact() {
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (event) => {
      const { target } = event;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === "email") {
        setEmail(inputValue);
      } else if (inputType === "Name") {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      }
      if (!Name) {
        setErrorMessage("Your Name is required");
  
        return;
      }
      if (!Message) {
        setErrorMessage("Your Message is required");
  
        return;
      }
      alert(`${Name}, Thanks for send me a message! I'll be with you shortl
      `);
      setName("");
      setMessage("");
      setEmail("");
    };
  
    return (
      <div className="text-center">
        <h1 className="text-center">Contact Page</h1>
        <div className="formCont">
          <div className="formStyle">
            <Form>
              <Form.Group className="text-center">
                <Form.Label >Name:</Form.Label>
                <Form.Control
                  value={Name}
                  name="Name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Full Name"
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  value={Message}
                  name="message"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="How can I help you today!"
                  as="textarea"
                  size="md"
                  rows={3}
                />
              </Form.Group>
            </Form>
            <Button className="button align-center"
              type="button"
              onClick={handleFormSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;