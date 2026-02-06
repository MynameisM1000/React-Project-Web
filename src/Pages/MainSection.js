import 'bootstrap/dist/css/bootstrap.min.css';
import itImage from './Images/itImage.png';
import './css/Pages.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';
import { useEffect } from 'react';

const MainSection = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 500,
        });
    }, []);
    return (
        <div>
            <div className="container d-flex" data-aos="fade-up">
                <div className="MainTextArea">
                    <p className="textOne">Presenting</p>
                    <h1 className="textTwo">
                        ZONAS <span>WEEB</span>
                    </h1>
                    <h4 className="textThree">Designer & Developer</h4>
                    <div>
                    <Link to="/about"><button className="btn NotField">About Us</button></Link>
                        <a href="#last"><button className="btn Field">Hear Me</button></a>
                    </div>
                </div>
                <img className="itImage" src={itImage} alt="IT Illustration" />
            </div>

            <div className="section back">
                <div className="container d-flex section two">
                    <div className="central-section"  data-aos="fade-right">
                        <div className="cards">
                            <div className="back-solid-lines"></div>
                            <div className="flexbox 1">
                                <div className="card 1">
                                    <span>Quality in action</span>
                                    <h6>Professional approach</h6>
                                    <text>We create websites that work for your business and attract customers.</text>
                                </div>
                                <div className="card an 2">
                                    <span>Future technologies</span>
                                    <h6>Modern technologies</h6>
                                    <text>We use current tools and solutions for high-quality web development.</text>
                                </div>
                            </div>
                            <div className="flexbox 2">
                                <div className="card 3">
                                    <span>Design with character</span>
                                    <h6>Unique design</h6>
                                    <text>We develop designs that highlight your individuality.</text>
                                </div>
                                <div className="card an 4">
                                    <span>Always by your side</span>
                                    <h6>Support and development</h6>
                                    <text>We provide technical support and help grow your project.</text>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ulBlock" data-aos="fade-left">
                        <ul className="sectionUL">
                            <li>
                                <h6><span>Professional</span> approach</h6>
                                <text>We create websites that work for your business and attract customers.</text>
                            </li>
                            <li>
                                <h6><span>Modern</span> technologies</h6>
                                <text>We use current tools and solutions for high-quality web development.</text>
                            </li>
                            <li>
                                <h6><span>Unique</span> design</h6>
                                <text>We develop designs that highlight your individuality.</text>
                            </li>
                            <li>
                                <h6><span>Support</span> and development</h6>
                                <text>We provide technical support and help grow your project.</text>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='AboutServiceSectiion'>
                <div className="container d-flex Service">
                    <h1>Order the creation <br/> of Internet solutions inexpensively.</h1>
                    <div className='miniLine' id='linemar' />
                    <div className='ServiceBlock B1'>
                        <div className='imgPack B1' data-aos="zoom-in-right" />
                        <div className='ServiceInfo B1' data-aos="zoom-in-left">
                            <h2>One-page website development</h2>
                            <div className='miniLine' />
                            <p>If you decide to order a one-page website, then it is important to note that resources with a small number of pages and information on them are of low value to the search engines Google and Yandex, and therefore the content from such pages is difficult to raise to the top of the search system. Sites with 1-2 pages are usually called Landing Pages.</p>
                            <p>However, such sites and web projects have an undeniable advantage in the form of a low price. This is not a corporate portal, and therefore the cost of one-page resources rarely exceeds 150,000 tenge. For companies that are starting their work, such a site is great. It has the ability to briefly talk about your activities and launch contextual advertising on the site.</p>
                        </div>
                    </div>
                    <div className='ServiceBlock B2'>
                        <div className='imgPack B2 after' data-aos="zoom-in-right" />
                        <div className='ServiceInfo B2' data-aos="zoom-in-left">
                            <h2>Advantages of a corporate website</h2>
                            <div className='miniLine' />
                            <p>The creation of corporate online solutions can be safely called one of the most popular. And this is not surprising, a site with the ability to tell in detail about all the advantages of your company, online chat and bots, a convenient mobile version and adaptive layout, fast page loading and beautiful design are just some of the advantages of such sites.</p>
                            <p>Another advantage will be the ability to integrate with a CRM system - adding requests directly to CRM from the database, transferring contacts and the ability to track traffic using various analytics tools, such as Google Analytics or Yandex Metrika. We train customers to work with such systems, and also show how to set up conversions and get leads based on the statistics of visits to the resource.</p>
                        </div>
                        <div className='imgPack B2' />
                    </div>
                    <div className='ServiceBlock B3' id="lastS">
                        <div className='imgPack B3' data-aos="zoom-in-right" />
                        <div className='ServiceInfo B3' data-aos="zoom-in-left">
                            <h2>Brand book and corporate identity</h2>
                            <div className='miniLine' />
                            <p>Website development in Almaty and their advertising is not our only service. We also draw brand books, corporate identity to order for customers: logos, fonts, souvenirs, letterheads and business cards. Any design and work in our studio never copies someone else's style and is a unique product in its own way.</p>
                            <p id='last'>As a rule, the creation of a corporate identity is done by printing companies, despite the fact that their designers are mostly not experts in the field of typography and industrial design. However, our employees are specialists with many awards and achievements in such areas as design and identity. In this element, our professionals have practically no equal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
