import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends React.Component {
    render() {
        return(
            <div>
                {/*Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Clarence Taylor</span>
                        <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation