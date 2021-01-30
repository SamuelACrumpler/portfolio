import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <div className="row m-0 mt-2 p-2 rounded offcolor shadow">
                <div className="col-12 text-center p-2 contentcolor rounded">
                <a href="https://github.com/SamuelACrumpler" target="_blank"  rel="noreferrer" className="fa fa-github"><span className="sr-only sr-only focusable">Github</span></a>
                <a href="https://www.linkedin.com/in/samuel-c-864930138/" target="_blank"  rel="noreferrer" className="fa fa-linkedin"><span className="sr-only sr-only focusable">LinkedIn</span></a>
                <a href="https://twitter.com/53Crumpler" target="_blank"  rel="noreferrer" className="fa fa-twitter"><span className="sr-only sr-only focusable">Twitter</span></a>
                <a href="mailto:samuel.a.crumpler@gmail.com" className="fa fa-envelope"><span className="sr-only sr-only focusable">E-Mail</span></a>

                </div>
                <div className="col-12 text-center mt-2 contentcolor rounded">Copyright &#169; Samuel Crumpler 2020</div>
                 
            </div>
        )


    }
}

export default Footer