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
               
                <div className="container p-0 mt-2 shadow">
                <Navbar/>

                    <div className="row m-0 offcolor p-2 shadow rounded">
                        <div className="col-md-8 p-3 contentcolor rounded">
                            <h3 className="text-center">About Me</h3>
                            <hr />
                            <p className="indent">
                            From a young age I have had a strong interest in the Computer Science field. Computers have always fascinated me, as such I am always excited to learn more about them, and what sort of projects I can create with them. I have always been a self-motivated person opting to learn about how something works, rather than have someone else fix the issue for me. This mentality led to me learning how to develop websites, build computers, create programs, and learn other concepts. The main reason why I love most anything to deal with coding is due to the sheer amount there is to learn about different concepts, and finding ways to integrate those concepts into projects.
                            </p>
                            <p className="indent">
                            I have worked with several different languages over the years, as if late I have been working mostly with web technologies, and tools for game development such as Unity. As of late I have been practicing with MongoDB, React, Node.JS, Express.JS and Bootstrap in order to create fully fleshed out websites. During my course work at Western Governors University I created programs using Java, and MySQL for the database portion of these programs.

                            </p>
                            

                        </div>
                        <div className="col-md-4 pr-md-0 p-0 pl-md-2 rounded">
                            <div className="contentcolor ml-md-1 mt-sm-2 mt-2 mt-md-0 p-2 rounded">
                            <h3 className="text-center">Skills</h3>
                            <hr />
                                <div className="row p-0">
                                    {
                                        this.state.skills.map((skill) => (
                                            <div className="col-6"><span className="badge badge-primary w-100">{skill}</span></div>
                                            
                                            )
                                        )

                                    }
                                </div>
                                

                            </div>    
                            <div className="contentcolor ml-md-1 mt-2 p-2 rounded">
                                <h3 className="text-center">Education</h3>
                                <hr />
                                
                                <h6>Western Governors University</h6>
                                <p>
                                Bachelor's Degree in Software Development
                                </p>
                            </div>
                            <div className="contentcolor ml-md-1 mt-2 p-2 rounded">
                                <h3 className="text-center">Certifications</h3>
                                <hr />

                                <h6>CompTIA Project+</h6>
                                <p>Project Management Certification</p>
                                <hr />
                                <h6>CIW Web Specialist</h6>
                                <p>Advanced HTML5 and CSS3 Specialist Certification</p>
                                <hr />
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