import React, { Component } from 'react';
import Navbar from './nav';
import Footer from './footer';
import data from "../files/projects"

class projects extends Component {
    constructor(props) {
		super(props);

		this.state = {
            list : data
		}
	
    }

    //need to figure out if I want to manually add all the stuff for the projects. If mapped out. the first project needs to have a rounded aspect to it, then the last one

    render() {
		return (
			<div>
                <div className="container p-0 mt-2 shadow">
                <Navbar/>

                    <div className="row m-0 p-2 offcolor rounded">
                        {

                            this.state.list.map((project, index) => {
                                if(parseInt(index)%2 === 0){// if even
                                    return <div className="row m-0">
                                        <div className="col-md-12 col-lg-6 p-3 contentcolor text-center border border-primary">
                                            <h3>{project.title}</h3>
                                            <hr/>
                                            {project.tags.map((tag,index)=>{
                                                return <span className="badge badge-primary ml-1 mr-1">{tag}</span>
                                            })}
                                            <p className="mt-2">{project.desc}</p>
                                            <div>
                                                <button type="button" className="btn btn-primary float-left ">
                                                    <a href={project.web} target="_blank"  rel="noreferrer">View Project On Web</a>
                                                </button>

                                                <button type="button" className={project.disabled + " btn btn-primary float-right"}>
                                                    <a href={project.git} target="_blank"  rel="noreferrer">View Project on GitHub</a>
                                                </button>
                                            </div>      
                                        </div>
                                        <div className="col-md-12 col-lg-6 contentcolor p-0 fill border border-primary">
                                            
                                            <img className="img-fluid" src={project.pic} alt="Logo"/>

                                        </div>
                                    </div>
                                }else {// if odd
                                    return <div className="row m-0">

                                        <div className="col-md-12 col-lg-6 order-12 order-lg-1 contentcolor p-0 fill border border-primary">
                                            <img className="img-fluid" src={project.pic} alt="Logo"/>

                                        </div>
                                        <div className="col-md-12 col-lg-6 order-1 order-lg-12 p-3 contentcolor text-center border border-primary">
                                            <h3>{project.title}</h3>
                                            <hr/>
                                            {project.tags.map((tag,index)=>{
                                                return <span className="badge badge-primary ml-1 mr-1">{tag}</span>
                                            })}
                                            <p className="mt-2">{project.desc}</p>
                                            <button type="button" className="btn btn-primary float-left ">
                                                <a href={project.web} target="_blank"  rel="noreferrer">View Project On Web</a>
                                            </button>

                                            <button type="button" className={project.disabled + " btn btn-primary float-right"}>
                                                <a href={project.git} target="_blank" rel="noreferrer">View Project on GitHub</a>
                                            </button>      
                                        </div>
                                    </div>
                                }
                            })

                        }
                        
                    </div> 
                    <Footer />  
                </div>

            </div>

		);
	}
}

export default projects;