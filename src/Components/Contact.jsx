import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css"

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can perform any action with the collected information, such as sending it to a backend server
        try {
            const response = await axios.post('http://localhost:8000/contact', {
                name,
                email,
                message
            });

            // Show an alert with the message received from the server
            window.alert(response.data.message);

            // Reset the form fields after submission
            setName('');
            setEmail('');
            setMessage('');
        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="information-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
