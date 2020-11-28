import React, { Component } from 'react';
import Navbar from './nav';
class contact extends Component {

    render() {
		return (
			<div>
                <Navbar/>
                <div className="container p-2 offcolor rounded">
                    <div className="row m-0">
                    <div className="col-md-2  contentcolor rounded">
                            <h3>Soc Meads</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col-md-10 pr-0 rounded">
                            <div className="contentcolor ml-1 p-2 rounded">
                            <h3>Contact Me</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

		);
	}
}

export default contact;