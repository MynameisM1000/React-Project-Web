import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelegramIcon from './icon/TelegIcon.png';
import InsatIcon from './icon/instaIcon.png';
import '../Pages/css/Pages.css';
import swal from 'sweetalert';

const Footer = () => {
    const [phoneValue, setPhoneValue] = useState('+7');
    const [selectedMessenger, setSelectedMessenger] = useState(null);

    const handleSubmit = () => {
        if (phoneValue.trim().length !== 12) {
            swal("Oops!", "Please enter a valid phone number.", "warning");
            return;
        }

        if (!selectedMessenger) {
            swal("Oops!", "Please select a preferred messenger.", "warning");
            return;
        }

        const requestData = {
            date: new Date().toLocaleString("en-US", { timeZone: "Asia/Almaty" }),
            number: phoneValue,
            messenger: selectedMessenger
        };

        fetch("YOUR_API_KEY", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error while sending data: " + response.status);
                }
                return response.json();
            })
            .then(data => {
                swal("Good job!", "Thank you for your request! We will contact you soon.", "success");
                console.log("Server response:", data);
            })
            .catch(error => {
                alert("An error occurred: " + error.message);
                console.error("Error:", error);
            });
    };

    return (
        <div className="threadSection section">
            <div className="container d-flex section three">
                <div className="query_section">
                    <div className="cental_query">
                        <div className="infoblock high">
                            <div className="infoblock" id='scrolll'>
                                <h1>Get Started <br /> with Us</h1>
                                <h1 className="second-h1-footer">Get Started with Us</h1>
                                <h2>+7 (707) 007-14-03</h2>
                                <h3>info@gmail.com</h3>
                                <div className="logos">
                                    <a href="https://t.me/NuridinAset" target="_blank" rel="noopener noreferrer">
                                        <div className="logotip">
                                            <img src={TelegramIcon} className="tg_logo" alt="Telegram Logo" />
                                        </div>
                                    </a>
                                    <a href="https://example.com">
                                        <div className="logotip">
                                            <img src={InsatIcon} className="insta_logo" alt="Instagram Logo" />
                                        </div>
                                    </a>
                                </div>
                                <p>© 2023-2024 LLC Web Studio @sset</p>
                            </div>
                        </div>
                        <div className="formblock">
                            <h1 className="formtext">Leave a request and we will contact you shortly</h1>
                            <form id="myForm" action="" method="post">
                                <input
                                    type="text"
                                    id="phoneInput"
                                    name="tel"
                                    placeholder="+0(000)-000-0-00"
                                    value={phoneValue}
                                    onChange={(e) => setPhoneValue(e.target.value)}
                                />
                                <p className="messenger">How would you like to be contacted:</p>
                                <div className="radio_container">
                                    <div className="input-container">
                                        <input
                                            type="radio"
                                            name="radio"
                                            id="telegram"
                                            value="telegram"
                                            onChange={(e) => setSelectedMessenger(e.target.value)}
                                        />
                                        <div className="radio-tile">
                                            <label htmlFor="telegram">Telegram</label>
                                        </div>
                                    </div>
                                    <div className="input-container_two">
                                        <input
                                            type="radio"
                                            name="radio"
                                            id="whatsapp"
                                            value="whatsapp"
                                            onChange={(e) => setSelectedMessenger(e.target.value)}
                                        />
                                        <div className="radio-tile">
                                            <label htmlFor="whatsapp">Whatsapp</label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="query_btn"
                                    id="scrollbtn"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Leave a request
                                </button>
                            </form>
                            <p><a href="https://example.com" className="politic">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
