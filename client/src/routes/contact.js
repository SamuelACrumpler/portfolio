import React, { Component } from 'react';
import Navbar from './nav';
import Footer from './footer';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";



class contact extends Component {
    constructor() {
        super();
        let url = window.location.href;
        let arr = url.split("/");
        let result = arr[0] + "//" + arr[2]
        this.state = {
          name: "",
          email: "",
          message: "",
          status: "Submit",
          error: "",
          recaptchaInstance: "",
          path: result
        };   

		this.onChange = this.onChange.bind(this);


    } 

    callback(){
      console.log("done");
    }

    verifyCallback(response){
      console.log(response);

    }

    expiredCallback() {
      console.log(`Recaptcha expired`);
    };
    

    onChange(event) {
      const state = this.state
      state[event.target.name] = event.target.value;
      this.setState(state);
    }

    handleCaptcha(key){
      this.setState({
        captcha: true,
        'g-recaptcha-response': key
      })

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted)")
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if(name === ""){
            this.setState({error: "Name was left blank."})
        }else if(email === ""){
          this.setState({error: "E-Mail was left blank"})
       }else if(message === ""){
        this.setState({error: "E-Mail was left blank"})
      }

        axios({
            method: "POST", 
            url: this.state.path + "/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
       
    }

    
    resetForm(){
      document.getElementById('contact-form').reset();
    }

    //figure out a social media setup
    //figure out a contact setup.
    // https://www.michaelburrows.xyz/react-contact-form/


    render() {
		return (
			<div>
                <Navbar/>
                <div className="container p-2  rounded">
                    <div className="row m-0 p-2 rounded offcolor">
                        <div className="col-md-12 p-0 rounded">
                            <div className="contentcolor p-3 rounded">
                            <h3>Contact Me</h3>
                            
                            
                            <form id="contact-form" className="mb-2" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" rows="5" id="message"></textarea>
                                </div>
                                <ReCAPTCHA 
                                  className="mb-2"
                                  ref={e => this.state.recaptchaInstance = e}
                                  sitekey="6Lc8sTYaAAAAAN7ttPS6jmXZ_J5ZUP_IY2YUB_VT" 
                                  onChange={this.handleCaptcha} 
                                  verifyCallback={this.verifyCallback}
                                  onloadCallback={this.callback}
                                />

                                <button  className="btn btn-primary">Submit</button>
                            </form>
                              <div class="alert alert-danger" role="alert">
                                This is a danger alert—check it out!
                              </div>
                              <div class="alert alert-success" role="alert">
                                REMINDER! Set a clock for success to disappear, but not danger.
                              </div>
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