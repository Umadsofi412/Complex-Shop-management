import React from "react";
import { Link } from "react-router-dom";
import { FaFastBackward } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { BiBorderAll } from "react-icons/bi";
import { AiFillBook } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
import { VscPieChart } from "react-icons/vsc";


const LandingPage = () => {
    return (
        <div>
            <header className="header-container">
                <div className="nav-container">
                    <nav className="nav-links">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Pricing</a>
                    </nav>
                    <div className="nav-btn">
                        <Link className="nav-btn1" to="/login">Login</Link>
                        <Link className="nav-btn2" to="/signup">Create Your Free Account</Link>
                    </div>
                </div>
            </header>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-heading">
                        <h1>Manage Your Complex Shops with Ease</h1>
                    </div>
                    <div className="hero-content">
                        <p> Our application provides a comprehensive solution for managing your complex shops.
                            Whether you want to sell a shop or collect rent from shop owners, our platform offers an easy and efficient
                            way to handle all your needs. With secure transactions, real-time updates, and user-friendly interfaces,
                            managing your complex has never been easier.</p>
                    </div>
                    <div className="hero-btn">
                        <Link className="btn3" to="/signup">Get Started</Link>
                        <Link className="btn4" to="/login">Login</Link>
                    </div>
                </div>
            </section>
            <section className="feature">
                <div className="feature-container">
                    <div className="feature-heading">
                        <h1>Make every step user-centric</h1>
                    </div>
                    <div className="feature-subheading">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum mollitia exercitationem? Alias animi vero numquam saepe, consectetur eaque facilis tenetur error delectus ad enim nostrum corporis perferendis sapiente aliquid.</p>
                    </div>
                    <div className="feature-list">
                        <div className="row-1">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <FaHeadphonesAlt className="icons"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Manage Users</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum mollitia exercitationem? Alias animi vero numquam saepe, consectetur eaque facilis tenetur error delectus ad enim nostrum corporis perferendis sapiente aliquid.</p>
                                </div>
                            </div>
                            <span className="line-2"></span>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <TbAntennaBars5 className="icons" />
                                </div>
                                <div className="feature-content">
                                    <h3>Manage Shops</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum mollitia exercitationem? Alias animi vero numquam saepe, consectetur eaque facilis tenetur error delectus ad enim nostrum corporis perferendis sapiente aliquid.</p>
                                </div>
                            </div>
                            <span className="line-2"></span>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <BiBorderAll className="icons"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Manage Transactions</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum mollitia exercitationem? Alias animi vero numquam saepe, consectetur eaque facilis tenetur error delectus ad enim nostrum corporis perferendis sapiente aliquid.</p>
                                </div>
                            </div>
                        </div>
                        <span className="line-1"></span>
                        <div className="row-2">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <AiFillBook className="icons" />
                                </div>
                                <div className="feature-content">
                                    <h3>Manage Users</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum mollitia exercitationem? Alias animi vero numquam saepe, consectetur eaque facilis tenetur error delectus ad enim nostrum corporis perferendis sapiente aliquid.</p>
                                </div>
                            </div>
                            <span className="line-2"></span>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <AiFillFolder className="icons" />
                                </div>
                                <div className="feature-content">
                                    <h3>Manage Shops</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum mollitia exercitationem? Alias animi vero numquam saepe, consectetur eaque facilis tenetur error delectus ad enim nostrum corporis perferendis sapiente aliquid.</p>
                                </div>
                            </div>
                            <span className="line-2"></span>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <VscPieChart className="icons"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Manage Transactions</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum mollitia exercitationem? Alias animi vero numquam saepe, consectetur eaque facilis tenetur error delectus ad enim nostrum corporis perferendis sapiente aliquid.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="call-for-action">
                <div className="action-main-container">
                    <div>

                    </div>
                </div>
            </section>
            <footer className="footer">

            </footer>



        </div>
    )
}

export default LandingPage;