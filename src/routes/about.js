import React, { Component } from 'react';
import Navbar from './nav';
class about extends Component {

    render() {
		return (
			<div>
                <Navbar/>
               
                <div className="container p-2 offcolor rounded">
                    <div className="row m-0">
                        <div className="col-md-8 p-3 contentcolor rounded">
                            <h3>About Me</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            

                        </div>
                        <div className="col-md-4 pr-0 rounded">
                            
                            <div className="contentcolor ml-1 p-2 rounded">
                            <h3>Education</h3>
                                <h6>Western Governors University</h6>
                                <p>
                                Bachelor's Degree in Software Development
                                </p>
                            </div>
                            <div className="contentcolor ml-1 mt-2 p-2 rounded">
                                <h3>Certifications</h3>
                                <h6>CompTIA Project+</h6>
                                <p>Project Management Certification</p>
                                <h6>CIW Web Specialist</h6>
                                <p>Advanced HTML5 and CSS3 Specialist Certification</p>
                                <h6>CompTIA A+</h6>
                                <p>Technical Support and IT Operational Roles</p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

		);
	}
}

export default about;