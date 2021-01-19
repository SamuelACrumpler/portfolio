import React, { Component } from 'react';
import Navbar from './nav';
import Footer from './footer';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";



class contact extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          message: "",
          status: "Submit"
        };   


    } 

    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
          this.setState({ name: event.target.value });
        } else if (field === "email") {
          this.setState({ email: event.target.value });
        } else if (field === "message") {
          this.setState({ message: event.target.value });
        }
      }

    handleSubmit(event) {
    event.preventDefault();  
    this.setState({ status: "Sending" });  
    axios({
        method: "POST",
        url: "http://localhost:5000/contact",
        data: this.state,
    }).then((response) => {
        if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
        } else if (response.data.status === "failed") {
        alert("Message Failed");
        }
    });
    }

    //figure out a social media setup
    //figure out a contact setup.
    // https://www.michaelburrows.xyz/react-contact-form/


    render() {
        let buttonText = this.state.status;
		return (
			<div>
                <Navbar/>
                <div className="container p-2  rounded">
                    <div className="row m-0 p-2 rounded offcolor">
                        <div className="col-md-12 p-0 rounded">
                            <div className="contentcolor p-3 rounded">
                            <h3>Contact Me</h3>
                            
                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                </div>
                                <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                </div>
                                <div>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    value={this.state.message}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                </div>
                                <button type="submit">{buttonText}</button>
                            </form>  

                            </div>
                            
                        </div>
                    </div>

            <Footer/>


                </div>
            </div>

		);
	}
}

export default contact;