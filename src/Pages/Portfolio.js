import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Portfolio.css';
import Erorr404 from './Images/404.png';
import Page from './Images/pagefirst.png'
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Portfolio = () => {
    useEffect(() => {
            AOS.init({
                once: true,
                duration: 500,
            });
        }, []);
    return (
        <>
                <div className="frstsection">
                    <h1 className="portfiliotext">Portfolio</h1>
                    <div className="firstline"  data-aos="flip-left">
                        <a href="https://example.com/?ysclid=m574qkjzyw597086729">
                            <div className="page th1">
                                <img src={Page} alt="WebImage404" className="pageimg" />
                                <h1 className="pagetext">the first web</h1>
                                <p className="pageparagraf">This is the first website that was created.</p>
                            </div>
                        </a>
                        <Link to="/notfound"  data-aos="flip-left">
                            <div className="page th2">
                                <img src={Erorr404} alt="404" className="pageimg" />
                                <h1 className="pagetext">Soon...</h1>
                                <p className="pageparagraf">We're still working on it.</p>
                            </div>
                        </Link>
                        <Link to="/notfound"  data-aos="flip-left">
                            <div className="page th3">
                                <img src={Erorr404} alt="404" className="pageimg" />
                                <h1 className="pagetext">Soon...</h1>
                                <p className="pageparagraf">We're still working on it.</p>
                            </div>
                        </Link>
                        <Link to="/notfound"  data-aos="flip-left">
                            <div className="page th4">
                                <img src={Erorr404} alt="404" className="pageimg" />
                                <h1 className="pagetext">Soon...</h1>
                                <p className="pageparagraf">We're still working on it.</p>
                            </div>
                        </Link>
                        <Link to="/notfound"  data-aos="flip-left">
                            <div className="page th5">
                                <img src={Erorr404} alt="404" className="pageimg" />
                                <h1 className="pagetext">Soon...</h1>
                                <p className="pageparagraf">We're still working on it.</p>
                            </div>
                        </Link>
                        <Link to="/notfound"  data-aos="flip-left">
                            <div className="page th6">
                                <img src={Erorr404} alt="404" className="pageimg" />
                                <h1 className="pagetext">Soon...</h1>
                                <p className="pageparagraf">We're still working on it.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='background' />
        </>
    );
};

export default Portfolio;