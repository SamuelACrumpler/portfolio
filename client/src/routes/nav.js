import React, { Component } from 'react';
class Navbar extends Component {
    constructor(props) {
		super(props);

		this.state = {
			list : [{title: 'Home', link: '/'}, {title: 'About', link: '/about'},  {title: 'Projects', link: '/projects'}, {title: 'Contact', link: '/contact'},  ]
		}

	
	}
    
    render() {
		return (
			<nav className="navbar navbar-dark navbar-expand-lg navbar-l navcolor shadow p-0 static-top mb-2 rounded">
				<div className="container p-0">
					<a className="navbar-brand ml-3" href="/"><span className="htextcol">Samuel</span><span className="B612R"> Crumpler</span></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">

							{
								this.state.list.map((list, index) => {
									return <li className="nav-item" key={index}>
										<a className="nav-link pt-3 pb-3 text-center" href={list.link}>{list.title}</a>
									</li>

									}
								)

							}

					
							
						</ul>
					</div>
				</div>
			</nav>

		);
	}

}
    

export default Navbar;