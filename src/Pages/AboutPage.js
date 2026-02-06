import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/About.css';
import { useEffect, useState } from 'react';
const AboutPage = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('https://6768447ccbf3d7cefd378762.mockapi.io/api/clients/aboutUs');
                const data = await response.json();
                setTestimonials(data.map(item => ({
                    text: item.body,
                    author: item.email,
                })));
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };
        fetchTestimonials();
    }, []);

    // Cycle through testimonials with animation
    useEffect(() => {
        if (testimonials.length > 0) {
            const interval = setInterval(() => {
                setAnimationClass('slide-out'); // Start slide-out animation
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                    setAnimationClass('slide-in'); // Start slide-in animation
                }, 500); // Match duration of slide-out animation
            }, 6000); // Change testimonial every 5 seconds
            return () => clearInterval(interval);
        }
    }, [testimonials]);

    return (
        <>
            <div className="bodysector">
                <div className="discript">
                    <h1 id="com">About <text><span className="colo">@</span>ss<span className="colo">et</span></text></h1>
                    <div className="informationsector">
                        <div className="sectors">
                            <h1>0 <span className="colo">billion ₽</span></h1>
                            <p>Revenue generated for our clients through their websites</p>
                        </div>
                        <div className="sectors">
                            <h1>300<span className="colo">+</span></h1>
                            <p>Landing pages and websites successfully delivered</p>
                        </div>
                        <div className="sectors">
                            <h1>100<span className="colo">%</span></h1>
                            <p>Unmatched quality assurance for every project</p>
                        </div>
                        <div className="sectors">
                            <h1>100<span className="colo">%</span></h1>
                            <p>Our clients recommend us without hesitation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MainAboutUS">
                <div className="container-md px-6">
                    <h1><span>@</span>SS<span>ET</span> - A Premium Web Studio in Kazakhstan</h1>
                    <h6 id='aboutCom'>In today's world, a company's online presence is a key factor in its success. @SSET, a premium web studio, is ready to offer you top-quality services for creating and developing your digital image. Our specialists have deep knowledge and many years of experience in web development, allowing us to implement the boldest and most ambitious projects.</h6>
                    <ol>
                        <li>
                            Individual approach to each client
                            <h6>We understand that every company is unique, which is why we offer only customized solutions that fully align with your business goals and objectives. Our team carefully analyzes your needs and offers the best strategies for their implementation.</h6>
                        </li>
                        <li>
                        High quality and professionalism
                            <h6>Premium services are our standard. We guarantee high quality at every stage of the project. Our specialists constantly improve their skills and keep up with the latest trends in web development to offer you the most modern and effective solutions.</h6>
                        </li>
                        <li>
                        Comprehensive approach
                            <h6>At @SSET, we provide a full range of services: from website development and content creation to its promotion and technical support. We ensure that your project is successful on all levels and delivers the results you expect.</h6>
                        </li>
                        <li>
                        Technological excellence
                            <h6>We use the latest technologies and tools to create web solutions. This allows us to develop functional and intuitive websites that work quickly and seamlessly. Our websites are adaptive and look great on all devices – from smartphones to desktop computers.</h6>
                        </li>
                        <li>
                        Transparency and honesty
                            <h6>We build long-term relationships with our clients based on trust and openness. You will always be aware of every stage of your project, and you will receive full reporting on completed tasks.</h6>
                        </li>
                    </ol>
                    <h5>Our services</h5>
                    <h6><span>Website development of any complexity:</span>from landing pages to large portals and online stores.</h6>
                    <h6><span>Design and branding:</span>creating a unique visual identity for your company.</h6>
                    <h6><span>SEO optimization:</span>improving your website's visibility in search engines.</h6>
                    <h6><span>Technical support and updates:</span>ensuring the smooth operation of your website.</h6>
                    <h6><span>Advertising and promotion:</span>developing and implementing effective advertising campaigns.</h6>
                    <h5>Why choose us?</h5>
                    <h6 id='last'>Our web studio has already helped dozens of companies become prominent and successful online. We are proud of our achievements and our ability to offer clients only the best. @SSET employs specialists who are passionate about their work and ready to put in maximum effort to achieve your goals.</h6>
                </div>
            </div>
            <div className="comments">
                <div className="container-md px-6 two">
                    <div className="testimonials">
                        <h2>What Our Clients Say</h2>
                        {testimonials.length > 0 ? (
                            <div
                                key={currentIndex}
                                className={`testimonial-item ${animationClass}`}
                            >
                                <blockquote>{testimonials[currentIndex].text}:</blockquote>
                                <cite>- {testimonials[currentIndex].author}</cite>
                            </div>
                        ) : (
                            <p>Loading testimonials...</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
