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
          response: "",
          seconds: 0,
          path: result
        };   

    this.onChange = this.onChange.bind(this);
    this.handleCaptchaResponseChange = this.handleCaptchaResponseChange.bind(this);
    this.countDown = this.countDown.bind(this);


    } 

    componentDidMount(){console.log("Seconds: " + this.state.seconds)}

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

    handleCaptchaResponseChange(res) {
      console.log("Captcha value:", res)
      this.setState({
        response: res,
      });
    }

    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    
    countDown() {
      console.log("Seconds: " + this.state.seconds)
      let s = this.state.seconds - 1;
      this.setState({seconds : s})
      
      if (this.state.seconds === 0) { 
        clearInterval(this.timer);
        document.getElementById("error").classList.add('d-none');
        document.getElementById("success").classList.add('d-none');



      }
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted)")
        console.log("message"+document.getElementById('message').value)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const response = this.state.response;
        if(name === ""){
            this.setState({error: "Name was left blank."})
						document.getElementById("error").classList.remove('d-none');
            return;
        }else if(email === ""){
          this.setState({error: "E-Mail was left blank"})
            document.getElementById("error").classList.remove('d-none');
            return;
            
          
       }else if(this.validateEmail(email) === false){
        this.setState({error: "E-Mail is not valid"})
        document.getElementById("error").classList.remove('d-none');
        return;

       }else if(message === ""){
        this.setState({error: "Message was left blank"})
            document.getElementById("error").classList.remove('d-none');
            return;
            
      }else if(response === "" || response === null){
        this.setState({error: "The reCAPTCHA was invalid. Go back and try it again."})
            document.getElementById("error").classList.remove('d-none');
            return;
            
      }

      console.log("Got past this all stuff");

      axios.post(this.state.path + '/api/rcap',{'g-recaptcha-response' : response})
			  .then(res => {
         
			})
      
      axios({
        method: "POST", 
        url: this.state.path + "/send", 
        data: {
            name: name,   
            email: email,  
            message: message
        }
      }).then((response)=>{
        if (response.data.msg === 'success'){
            this.setState({error: "Message was sent successfully"})
            document.getElementById("success").classList.remove('d-none');
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            this.setState({error: "Message failed to send."})
            document.getElementById("error").classList.remove('d-none');
        }
    })
      
   
    }

    
    resetForm(){
      document.getElementById('contact-form').reset();
      this.recaptcha.reset();
      this.setState({response: ""})
      this.setState({seconds: 15}, () =>
      {
        console.log("SecondsSet: " + this.state.seconds)
        this.timer = setInterval(this.countDown, 1000)

      })
    }

    render() {
		return (
			<div>
                <div className="container p-2  rounded">
                <Navbar/>

                    <div className="row m-0 p-2 rounded offcolor">
                        <div className="col-md-12 p-0 rounded">
                            <div className="contentcolor p-3 rounded">
                            <h3>Contact Me</h3>
                            <hr/>
                            
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
                                  ref={(el) => { this.recaptcha = el; }}
                                  sitekey="6Lc8sTYaAAAAAN7ttPS6jmXZ_J5ZUP_IY2YUB_VT" 
                                  onChange={this.handleCaptchaResponseChange} 
                                  verifyCallback={this.verifyCallback}
                                  onloadCallback={this.callback}
                                />

                                <button  className="btn btn-primary">Submit</button>
                            </form>
                              <div class="alert alert-danger d-none" id="error" role="alert">
                              {this.state.error}
                              </div>
                              <div class="alert alert-success d-none" id="success" role="alert">
                                {this.state.error}
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