const Recommendedtours = () => {
    return (
        <div>
            <div className="wrapper">


                <div className="body-overlay"></div>


                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3><img src="img/driverlogo.png" className="img-fluid" /><span>Driver Dashboard</span></h3>
                    </div>
                    <ul className="list-unstyled components">

                        <a href="index.html" className="dashboard"><i className="material-icons">dashboard</i><span>Dashboard</span></a>


                        <div className="small-screen navbar-display">


                            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
                                <a href="#"><i className="material-icons">apps</i><span>apps</span></a>
                            </li>

                            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
                                <a href="#"><i className="material-icons">person</i><span>user</span></a>
                            </li>

                            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
                                <a href="#"><i className="material-icons">settings</i><span>setting</span></a>
                            </li>
                        </div>


                        <li className="active">

                            <a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="material-icons">aspect_ratio</i><span>Tour Mangement</span></a>
                            <ul className="collapse list-unstyled menu" id="homeSubmenu1">
                                <li />
                                <li className="active">
                                    <a href="recommendedtours.html">Recommended Tours</a>
                                </li>
                                <li>
                                    <a href="completedtours.html">Completed Tours</a>
                                </li>
                                <li>
                                    <a href="addrev.html">Add a Review</a>
                                </li>
                            </ul>
                        </li>


                        <li className="">
                            <a href="#"><i className="bi bi-wallet-fill" style={{fontSize: '24px'}}></i><span>Wallet</span></a>
                        </li>

                    </ul>


                </nav>


                <div id="content">

                    <div className="top-navbar">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">

                                <button type="button" id="sidebarCollapse" className="d-xl-block d-lg-block d-md-mone d-none">
                                    <span className="material-icons">arrow_back_ios</span>
                                </button>

                                <a className="navbar-brand" href="recommendedtours.html"> Recommended Tours </a>

                                <button className="d-inline-block d-lg-none ml-auto more-button" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="material-icons">more_vert</span>
                                </button>

                                <div className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav ml-auto">

                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span className="material-icons">apps</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span className="material-icons">person</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="profile.html">
                                                <span className="material-icons">settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="main-content">

                    <div className="row ">
                        <div className="main-skills">
                            <div className="card1">
                                <div className="daycard1">
                                    <h3>2022/11/04</h3>
                                </div>
                                <i className="bi bi-person-circle"></i>
                                <p />Alex Hedron<br />
                                England<br /><p />
                                <h2>Kandy</h2>
                                <h3 />5 Days, 4 Nights<br />
                                10 Passengers<br />
                                AC<br />
                                KDH<br />
                                <h3 />
                                <p>Elle, Badulla</p>
                                <button onclick="window.location.href='viewdetails.html';">View Details</button>

                            </div>
                        </div>


                    </div>

                </div><h3 />
            </div>
        </div>


    );
}

export default Recommendedtours;