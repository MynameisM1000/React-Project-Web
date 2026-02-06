import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Contact.css';
import GoogleMap from '../Components/GoogleMap';

const Contact = () => {
	return (
		<div className='main'>
			<h1>Our Office</h1>
			<GoogleMap />
		</div>
    );
};

export default Contact;