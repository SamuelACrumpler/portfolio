import React, { Component } from 'react';
import Navbar from './nav';
import Footer from './footer';


class contact extends Component {

    //figure out a social media setup
    //figure out a contact setup.

    render() {
		return (
			<div>
                <Navbar/>
                <div className="container p-2  rounded">
                    <div className="row m-0 p-2 rounded offcolor">
                        <div className="col-md-12 p-0 rounded">
                            <div className="contentcolor p-3 rounded">
                            <h3>Contact Me</h3>
                                <div className="col p-0 mb-3">
                                    Currently looking for long time employment or contract work. Feel free to contact me with any questions you may have regarding anything you see in the portfolio. Additionally any social media websites I am active on are listed on the footer of the website.
                                </div>
                                <div className="col p-0 mb-2">
                                    <h6>Your Name*</h6>
                                    <input type="text" class="form-control"/>

                                </div>

                                <div className="col p-0 mb-2">
                                    <h6>E-Mail*</h6>
                                    <input type="text" class="form-control"/>

                                </div>

                                <div className="col p-0 mb-2">
                                    <h6>Subject</h6>
                                    <input type="text" class="form-control"/>

                                </div>

                                <div class="col p-0">
                                    <h6>Message</h6>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
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