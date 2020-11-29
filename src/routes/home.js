import React, { Component } from 'react';
import Navbar from './nav';
import wall from '../imgs/wall.png';
import Footer from './footer';
class home extends Component {
    constructor(props) {
		super(props);

		this.state = {
			list : [{title: 'Home', link: '/'}, {title: 'About', link: '/about'},  {title: 'Projects', link: '/projects'}, {title: 'Contact', link: '/contact'},  ]
		}

	
    }
    
    //fix up the margin setup

    render() {
		return (
			<div className="">
                <Navbar/>
                <div className="container p-2 rounded">
                    <div className="row mb-3  m-0">
                        <div className="col-lg offcolor p-1 rounded">
                            <h5 className="contentcolor rounded p-3 m-1">Hi. I'm Samuel, and I'm a full stack developer</h5>
                        </div>
                    </div>
                    <div className="row mb-3 m-0">
                        <div className="col-lg p-2 offcolor rounded"> 
                            <div className="row mt-2 mb-2">
                                <div className="col-lg-4 pr-lg-0 mb-sm-2 mb-2">
                                <h4 className="headercolor text-center rounded">IsleyScheduler</h4>

                                    <div className="contentcolor rounded p-3 m-0 text-center">
                                    <h6 className="">MERN Stack Project</h6>
                                    PROJECT HIGHLIGHT   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <img className="img-fluid rounded" src={wall} alt="Logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-4 offcolor p-0 rounded">
                            
                            <h4 className="headercolor text-center rounded p-1">Experience</h4>
                            <div className=" contentcolor rounded m-2 p-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            <div className="m-2">
                              <button type="button" className="btn btn-secondary btn-learnmore btn-block">
                                <a>
                                Learn More
 
                                </a>
                              </button>
                            </div>
                        </div>

                        <div className="col-lg-3 ml-auto mt-sm-2 mt-2 mt-md-0 offcolor p-0 rounded ">
                        <h4 className="headercolor text-center rounded p-1">Testimonials</h4>

                            <div className="row m-2 p-3 contentcolor rounded text-center">
                            <h6 className="text-center w-100">Samuel is a Murder Expert</h6>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <h6 className="text-right w-100">- Jimmy H Killins</h6>
                            <h6 className="text-right w-100">Not Serial Killer</h6>

                            </div>
                            
                        </div>
                        <div className="col-lg-4 ml-auto mt-sm-2 mt-2 mt-md-0 offcolor rounded p-0">
                        <h4 className="headercolor text-center rounded p-1">Social</h4>

                        </div>
                    </div>
                <Footer/>

                </div>
            </div>

		);
	}
}

export default home