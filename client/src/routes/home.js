import React, { Component } from 'react';
import Navbar from './nav';
import wall from '../imgs/wall.png';
import Footer from './footer';
import data from "../files/projects"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
class home extends Component {
    constructor(props) {
		super(props);

		this.state = {
            list : [{title: 'Home', link: '/'}, {title: 'About', link: '/about'},  {title: 'Projects', link: '/projects'}, {title: 'Contact', link: '/contact'},  ],
            lstProject : data
		}
        
        console.log(data)
	
    }
    
    //fix up the margin setup

    render() {
		return (
            <div className="container p-2 rounded">
                <Navbar/>

                <div className="row mb-3 offcolor  m-0 shadow rounded">
                        <div className="col-lg p-1 rounded">
                            <h5 className="contentcolor rounded p-3 m-1">Hi. I'm Samuel, and I'm a full stack developer</h5>
                        </div>
                    <div className="row m-0">

                        <div className="col-lg-9 pb-2   rounded"> 
                            
                            <div id="carousel" class="carousel slide pt-0" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    {
                                        this.state.lstProject.map((project, index) =>{
                                            if(index === 0){//for the first item
                                                return <li data-target="#carousel" key={index} data-slide-to={index} className="active"></li>
                                            }else{
                                                return <li data-target="#carousel" data-slide-to={index}></li>
                                            }
                                        })
                                    }
                                </ol>
                                <div className="carousel-inner">
                                    {
                                        this.state.lstProject.map((project, index) =>{
                                            if(index === 0){//for the first item
                                                return <div class="carousel-item active">
                                                            <img class="d-block w-100 rounded" src={project.pic} alt=""/>
                                                            <div class="carousel-caption d-none d-md-block rounded text-center carocolor">
                                                                <h5>{project.title}</h5>
                                                                <p>{project.summary}</p>
                                                                <button type="button" className="btn btn-primary mr-1">
                                                                    <a href={project.web} target="_blank"  rel="noreferrer">View Project On Web</a>
                                                                </button>
                                                                <button type="button" className={project.disabled + " btn btn-primary ml-1"}>
                                                                    <a href={project.git} target="_blank"  rel="noreferrer">View Project on GitHub</a>
                                                                </button>
                                                            </div>
                                                        </div>
                                            }else{
                                                return <div class="carousel-item">
                                                            <img class="d-block w-100 rounded" src={project.pic} alt=""/>
                                                            <div class="carousel-caption d-none d-md-block carocolor rounded">
                                                                <h5>{project.title}</h5>
                                                                <p className="">{project.summary}</p>
                                                                <button type="button" className="btn btn-primary mr-1">
                                                                    <a href={project.web} target="_blank"  rel="noreferrer">View Project On Web</a>
                                                                </button>
                                                                <button type="button" className={project.disabled + " btn btn-primary ml-1"}>
                                                                    <a href={project.git} target="_blank"  rel="noreferrer">View Project on GitHub</a>
                                                                </button>
                                                            </div>
                                                        </div>
                                            }
                                        })
                                    }
                                    
                                </div>
                                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                    <span className="carospan">
                                        <span class="carousel-control-prev-icon caro-m" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </span>
                                </a>
                                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                    <span className="carospan">
                                        <span class="carousel-control-next-icon caro-m" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="53Crumpler"
                                options={{height: 600}}
                            />
                        </div>
                    </div>
                </div>
                    
                <Footer/>

            </div>

		);
	}
}

export default home