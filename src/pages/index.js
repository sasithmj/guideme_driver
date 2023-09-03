const Index = () => {
    return (
        <div>

            <div className="wrapper">


                <div className="body-overlay"></div>


                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3><img src="img/driverlogo.png" className="img-fluid" /><span>Driver Dashboard</span></h3>
                    </div>
                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#" className="dashboard"><i className="material-icons">dashboard</i><span>Dashboard</span></a>
                        </li>

                        <div className="small-screen navbar-display">


                            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
                                <a href="#"><i className="material-icons">apps</i><span>apps</span></a>
                            </li>

                            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
                                <a href="#"><i className="material-icons">person</i><span>user</span></a>
                            </li>

                            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
                                <a href="profile.html"><i className="material-icons">settings</i><span>setting</span></a>
                            </li>
                        </div>


                        <li className="dropdown">
                            <a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="material-icons">aspect_ratio</i><span>Tour Mangement</span></a>
                            <ul className="collapse list-unstyled menu" id="homeSubmenu1">
                                <li>
                                    <a href="recommendedtours.html">Recommended Tours</a>
                                </li>
                                <li>
                                    <a href="#">Completed Tours</a>
                                </li>
                                <li>
                                    <a href="#">Add a Review</a>
                                </li>
                            </ul>
                        </li>


                        <li className="">
                            <a href="#"><i className="bi bi-wallet-fill" style={{fontSize:'24px'}}></i><span>Wallet</span></a>
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

                                <a className="navbar-brand" href="#"> Dashboard </a>

                                <button className="d-inline-block d-lg-none ml-auto more-button" type="button"
                                    data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="material-icons">more_vert</span>
                                </button>

                                <div className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
                                    id="navbarSupportedContent">
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
                                            <a className="nav-link" href="#">
                                                <span className="material-icons">settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>


                    <div className="main-content">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header">
                                        <div className="icon icon-rose">
                                            <span className="material-icons">shopping_cart</span>

                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <p className="category"><strong>On going Tours</strong></p>
                                        <h3 className="card-title">1</h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="material-icons">local_offer</i> #Tour
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header">
                                        <div className="icon icon-success">
                                            <span className="material-icons">
                                                attach_money
                                            </span>

                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <p className="category"><strong>Revenue</strong></p>
                                        <h3 className="card-title">$23,100</h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="material-icons">date_range</i> #Tour
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row ">
                            <div className="col-lg-7 col-md-12">
                                <div className="card" style={{minHeight: '485px'}}>
                                    <div className="card-header card-header-text">
                                        <h4 className="card-title">Recently Visited Tours</h4>
                                        <p className="category">November on 2022</p>
                                    </div>
                                    <div className="card-content table-responsive">
                                        <table className="table table-hover">
                                            <thead className="text-primary">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Tour Cost</th>
                                                    <th>Location</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Bob Williams</td>
                                                    <td>$23,566</td>
                                                    <td>Kandy</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Mike Tyson</td>
                                                    <td>$10,200</td>
                                                    <td>Badulla</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <footer className="footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <nav className="d-flex">
                                            <ul className="m-0 p-0">
                                                <li>
                                                    <a href="#">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Company
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Portfolio
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Blog
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>

                                    </div>
                                    <div className="col-md-6">
                                        <p className="copyright d-flex justify-content-end"> &copy 2021 Design by
                                            <a href="#">Vishweb Design</a> BootStrap Admin Dashboard
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </footer>

                    </div>



                </div>
            </div>




            {/* 
<script src="js/jquery-3.3.1.slim.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-3.3.1.min.js"></script>


<script type="text/javascript">
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleclassName('active');
        $('#content').toggleclassName('active');
    });

    $('.more-button,.body-overlay').on('click', function () {
        $('#sidebar,.body-overlay').toggleclassName('show-nav');
    });

});



</script>
 */}


        </div>
    );
}

export default Index;