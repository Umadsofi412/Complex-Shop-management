import React from "react";
import { Link } from "react-router-dom";
import { FaHeadphonesAlt } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { BiBorderAll } from "react-icons/bi";
import { AiFillBook } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
import { VscPieChart } from "react-icons/vsc";
import Woman from '../../images/woman.png'
import { useSelector } from "react-redux";
const LandingPage = () => {
    const { user, isAdmin } = useSelector((state) => state.auth);

    return (
        <div>
            {/* <header className="header-container">
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
            </header> */}
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
                        {!user ? <Link className="btn3" to="/signup">Get Started</Link> : <Link className="btn3" to="/shops">Go to Shops</Link>}
                        {!user ?<Link className="btn4" to="/login">Login</Link>:''}
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
                    <div className="call-content">
                        <div className="heading-subheading">
                            <h2>Try it for<br/>free</h2>
                            <p>Clarity gives you the blocks &
                             components you need to create a
                              truly professional website, landing 
                             page or admin panel for your SaaS.</p>
                        </div>
                        <div className="buttons">
                            <Link className="btn5" to="/signup">Get Started</Link>
                            <Link className="btn6" to="/login">Explore All Blocks</Link>
                        </div>
                    </div>
                    <div className="img">
                       
                        <span className="circle"></span>
                        <span className="rectangle"></span>
                        <span className="rectangle-1"></span>
                        <img src={Woman} className="img-1" alt="woman-img" />
                        <span className="polygon"></span>
                        <span className="text">
                            <p>Hey, it’s free for you!</p>
                        </span>    
                    </div>
                </div>
            </section>
            <footer className="footer">
            <div className="footer-container">
                <div className="footer-section-1">
                        <div className="footer-section-content">
                            <h2>Newsletter</h2>
                            <p>Subscribe to our newsletter to get the latest news and updates</p>
                        </div>
                        <div className="footer-section-button">
                            <input type="email" placeholder="Enter your email" />
                            <button>Submit</button>
                        </div>
                </div>
                <div className="footer-section-2">

                </div>
                <div className="footer-section-3">

                </div>
                <div className="footer-section-4">

                 </div>
            </div>
            </footer>



        </div>
    )
}

export default LandingPage;