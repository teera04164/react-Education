import React, { Component } from 'react'
import Deshboard from '../../container/Deshboard'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'
// import $ from 'jquery'

const urlImg = 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/44328574_2823448087730291_8022456570522632192_n.jpg?_nc_cat=108&_nc_eui2=AeHGmK02OixTV1HyBYC2K2G2I7OKuSulNa_lo7XI_5vv1olwcOo_bBZE272upRiKX_b-b3g4s-TO-j0aYpInKTP_dn6wxcuG_SyTygnkrVslGQ&_nc_oc=AQlYAzhkd-B0K1pWhToXQGL7OL445gTDHy9lbLB_VglXJzJirRPXkYS8WXUJlVp00Es&_nc_ht=scontent.fbkk2-7.fna&oh=30e0574f22b1611f0a20157b36ebe4b9&oe=5D82BC87'
const $ = window.$;

// import $ from 'Jquery'
export default class index extends Component {
    constructor() {
        super();
        this.state = {
            id1: "active",
            id2: "",
            id3: "",
            id4: "",
            id5: "",
            togle: "main-sidebar col-12 col-md-3 col-lg-2 px-0",
            isShow: false,
            i: 1

        };

    }

    componentDidMount() {


        if (window.location.pathname === "/home") {
            this.setState({ isShow: true })
        }

        else {
            this.setState({ isShow: false })
        }
        // $('.teera3').click((e) => {
        //     console.log("teera 1")

        //     // $('.main-sidebar').toggleClass('open')

        // })
        // $('.teera2').click((e) => {
        //     console.log("teera 2");

        // $('.main-sidebar').toggleClass('open')

        // }


        // $('#togle1').click((e) => {
        //     console.log("in togle1");

        //     $('.main-sidebar').toggleClass('open')

        // })


    }

    componentDidUpdate() {
        $('.toggle-sidebar').unbind('click');

        var slideConfig = {
            duration: 270,
            easing: 'easeOutSine'
        };

        // Add dropdown animations when toggled.
        $(':not(.main-sidebar--icons-only) .dropdown').on('show.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(slideConfig);
        });

        $(':not(.main-sidebar--icons-only) .dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(slideConfig);
        });

        /**
         * Sidebar toggles
         */
        $('.toggle-sidebar').click(function (e) {
            $('.main-sidebar').toggleClass('open')
        })





        // $('.teera1').click(function (e) {
        //     $('.main-sidebar').toggleClass('open')
        // });
    }

    getId = (id) => {
        this.setState({ id: id })
        console.log(id);

    }

    handleCheck = (id) => {
        // $('.toggle-sidebar').click(function (e) {
        //     $('.main-sidebar').toggleClass('open');
        //   })

    }

    render() {
        console.log("in Sidebar -> ", window.location.pathname);

        const { id1, id2, id3, id4, id5 } = this.state
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            {/* Main Sidebar */}

                            <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0" id="togle1">
                                <div className="main-navbar">

                                    <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                                        <a className="navbar-brand w-100 mr-0" href="fakeURL" >
                                            <div className="d-table m-auto">
                                                <img id="main-logo" className="d-inline-block align-top mr-1" style={{ maxWidth: 25 }} src="images/shards-dashboards-logo.svg" alt="Shards Dashboard" />
                                                <span className="d-none d-md-inline ml-1 " >SMS PHUPHAMAN</span>
                                            </div>
                                        </a>
                                        <div className="teera2">
                                            <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                                                <i className="material-icons">
                                                    arrow_back
                                                </i>
                                            </a>
                                        </div>
                                    </nav>
                                </div>

                                <form action="fakeURL" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
                                    <div className="input-group input-group-seamless ml-3">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                {/* <i className="fas fa-search" /> */}
                                            </div>
                                        </div>

                                        {/* <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" />  */}
                                    </div>
                                </form>
                                <div className="nav-wrapper">
                                    <ul className="nav flex-column">
                                        <div className="teera1">
                                            <NavLink to="/deshboard">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="fakeURL">

                                                        <i className="material-icons" >edit</i>
                                                        <span>หน้าหลัก</span>

                                                    </a>
                                                </li>
                                            </NavLink>
                                            <NavLink to='/user' >
                                                <li className="nav-item">
                                                    <a className="nav-link " href="fakeURL" >

                                                        <i className="material-icons">vertical_split</i>
                                                        <span>ปีการศึกษา</span>

                                                    </a>
                                                </li>
                                            </NavLink>
                                            <NavLink to='/class' >
                                                <li className="nav-item">
                                                    <a className="nav-link" href="fakeURL">
                                                        <i className="material-icons">note_add</i>
                                                        <span>ห้องเรียน</span>
                                                    </a>
                                                </li>
                                            </NavLink>
                                            <NavLink to='/subject' >
                                                <li className="nav-item">
                                                    <a className="nav-link" href="fakeURL">
                                                        <i className="material-icons">note_add</i>
                                                        <span>รายวิชา</span>
                                                    </a>
                                                </li>
                                            </NavLink>
                                            <NavLink to='/teacher' >
                                                <li className="nav-item">
                                                    <a className="nav-link" href="fakeURL">
                                                        <i className="material-icons">note_add</i>
                                                        <span>อาจารย์</span>
                                                    </a>
                                                </li>
                                            </NavLink>
                                        </div>
                                        <li className="nav-item">
                                            <a className="nav-link " href="form-components.html">
                                                <i className="material-icons">view_module</i>
                                                <span>นักเรียน</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="tables.html">
                                                <i className="material-icons">table_chart</i>
                                                <span>Tables</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="user-profile-lite.html">
                                                <i className="material-icons">person</i>
                                                <span>User Profile</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="errors.html">
                                                <i className="material-icons">error</i>
                                                <span>Errors</span>
                                            </a>

                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                                                <i class="material-icons"></i>
                                                <span>User Account</span>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-small" x-placement="bottom-start">
                                                <a class="dropdown-item " href="user-profile.html">User Profile</a>
                                                <a class="dropdown-item " href="user-profile-lite.html">User Profile Lite</a>
                                                <a class="dropdown-item " href="edit-user-profile.html">Edit User Profile</a>
                                                <a class="dropdown-item " href="login.html">Login</a>
                                                <a class="dropdown-item " href="register.html">Register</a>
                                                <a class="dropdown-item " href="forgot-password.html">Forgot Password</a>
                                                <a class="dropdown-item " href="change-password.html">Change Password</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                            {/* End Main Sidebar */}
                            <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                                <div className="main-navbar sticky-top bg-white">
                                    {/* Main Navbar */}
                                    <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                                        <form action="fakeURL" className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                                            <div className="input-group input-group-seamless ml-3">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        {/* <i className="fas fa-search" /> */}
                                                    </div>
                                                </div>
                                                {/* <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" />  */}
                                            </div>
                                        </form>
                                        <ul className="navbar-nav border-left flex-row ">
                                            <li className="nav-item border-right dropdown notifications">
                                                <a className="nav-link nav-link-icon text-center" href="fakeURL" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <div className="nav-link-icon__wrapper">
                                                        <i className="material-icons"></i>
                                                        <span className="badge badge-pill badge-danger">2</span>
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                                                    <a className="dropdown-item" href="fakeURL">
                                                        <div className="notification__icon-wrapper">
                                                            <div className="notification__icon">
                                                                <i className="material-icons"></i>
                                                            </div>
                                                        </div>
                                                        <div className="notification__content">
                                                            <span className="notification__category">Analytics</span>
                                                            <p>Your website’s active users count increased by
                        <span className="text-success text-semibold">28%</span> in the last week. Great job!</p>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item" href="fakeURL">
                                                        <div className="notification__icon-wrapper">
                                                            <div className="notification__icon">
                                                                <i className="material-icons"></i>
                                                            </div>
                                                        </div>
                                                        <div className="notification__content">
                                                            <span className="notification__category">Sales</span>
                                                            <p>Last week your store’s sales count decreased by
                        <span className="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item notification__all text-center" href="fakeURL"> View all Notifications </a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="fakeURL" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <img className="user-avatar rounded-circle mr-2" src={urlImg} alt="User Avatar" />
                                                    <span className="d-none d-md-inline-block">ธีรพงษ์  สิทธิการ</span>

                                                </a>
                                                <div className="dropdown-menu dropdown-menu-small">
                                                    <a className="dropdown-item" href="user-profile-lite.html">
                                                        <i className="material-icons"></i> Profile</a>
                                                    <a className="dropdown-item" href="components-blog-posts.html">
                                                        <i className="material-icons">vertical_split</i> Blog Posts</a>
                                                    <a className="dropdown-item" href="add-new-post.html">
                                                        <i className="material-icons">note_add</i> Add New Post</a>
                                                    <div className="dropdown-divider" />
                                                    <NavLink to="/login">
                                                        <a className="dropdown-item text-danger" href="fakeURL">
                                                            <i className="material-icons text-danger"></i> Logout </a>
                                                    </NavLink>

                                                </div>
                                            </li>
                                        </ul>

                                        <nav className="nav">
                                            <div className="teera3">
                                                <a href="fakeURL" className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none  text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                                                    <i className="material-icons">
                                                        format_align_justify
                                                    </i>
                                                </a>
                                            </div>
                                        </nav>
                                    </nav>
                                </div>

                                <div className="container">
                                </div>
                            </main>


                        </div>
                        {/*  content   */}
                        {
                            window.location.pathname === "/home" ? <Deshboard /> : ""
                        }
                        {routes}
                    </div>
                </div>

            </div>
        )
    }
}
