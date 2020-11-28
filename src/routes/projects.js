import React, { Component } from 'react';
import Navbar from './nav';
import wall from '../imgs/wall.png';

class projects extends Component {
    constructor(props) {
		super(props);

		this.state = {
			list : [{title: '', desc: '', thumbnail: ''} ]
		}

	
    }

    render() {
		return (
			<div>
                <Navbar/>
                <div className="container p-2 offcolor rounded">
                <div className="row m-0">
                
                    <div className="col-md-12 col-lg-6 p-3 contentcolor text-center">
                        <h3>Project Name</h3>
                        <h6>React.JS  Express.JS  MongoDB Node.JS</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button type="button" className="btn btn-secondary btn-learnmore float-left ">
                            <a>
                            View Project On Web
                            </a>
                        </button>

                        <button type="button" className="btn btn-secondary btn-learnmore float-right ">
                            <a>
                            View Project on GitHub
                            </a>
                        </button>      
                    </div>
                    <div className="col-md-12 col-lg-6 contentcolor p-0 fill">
                        
                        <img className="img-fluid" src={wall} alt="Logo"/>

                    </div>
                </div>
                <div className="row m-0">



                    <div className="col-md-12 col-lg-6 order-md-12 order-lg-1 contentcolor p-0 fill">
                        <img className="img-fluid" src={wall} alt="Logo"/>

                    </div>
                    <div className="col-md-12 col-lg-6 order-md-1 order-lg-12 p-3 contentcolor text-center">
                        <h3>Project Name 2</h3>
                        <h6>React.JS  Express.JS  MongoDB Node.JS</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button type="button" className="btn btn-secondary btn-learnmore float-left ">
                            <a>
                            View Project On Web
                            </a>
                        </button>

                        <button type="button" className="btn btn-secondary btn-learnmore float-right ">
                            <a>
                            View Project on GitHub
                            </a>
                        </button>    
                    </div>
                    
                 </div>   
                </div>

            </div>

		);
	}
}

export default projects;