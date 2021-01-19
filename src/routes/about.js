import React, { Component } from 'react';
import Footer from './footer';
import Navbar from './nav';
class about extends Component {
    constructor(props) {
		super(props);

		this.state = {
			skills : ['HTML5','CSS','JavaScript', 'Bootstrap',  'React.js', 'Express.js', 'Node.js', 'MongoDB', 'WordPress', 'MySQL', 'C#', 'C++', 'Java', 'Unity']
		}

	
	}


    //Write a script for filling out all the skills
    //About me needs to have some actual history



    render() {
		return (
			<div>
                <Navbar/>
               
                <div className="container p-2 rounded">
                    <div className="row m-0 offcolor p-2 rounded">
                        <div className="col-md-8 p-3 contentcolor rounded">
                            <h3>About Me</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            

                        </div>
                        <div className="col-md-4 pr-md-0 p-0 pl-md-2 rounded">
                            <div className="contentcolor ml-md-1 mt-sm-2 mt-2 mt-md-0 p-2 rounded">
                            <h3>Skills</h3>
                                <div className="row p-0">
                                   

                                    
                                    {
                                        this.state.skills.map((skill) => (
                                    

                                        <div className="col-6 tex">{skill}</div>

                                            
                                            )
                                        )

                                    }
                                </div>
                                

                            </div>    
                            <div className="contentcolor ml-md-1 mt-2 p-2 rounded">
                                <h3>Education</h3>
                                <h6>Western Governors University</h6>
                                <p>
                                Bachelor's Degree in Software Development
                                </p>
                            </div>
                            <div className="contentcolor ml-md-1 mt-2 p-2 rounded">
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
                <Footer/>

                </div>
                
            </div>

		);
	}
}

export default about;