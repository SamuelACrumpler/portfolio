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
			<nav className="navbar navbar-expand-lg navbar-dark navcolor static-top">
				<div className="container">
					<a className="navbar-brand" href="/"><span className="htextcol">Samuel</span><span className="B612R"> Crumpler</span></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">

							{
								this.state.list.map((list, index) => (
							

										<li className="nav-item" key={index}>
											<a className="nav-link" href={list.link}>{list.title}</a>
									
										</li>
									)
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