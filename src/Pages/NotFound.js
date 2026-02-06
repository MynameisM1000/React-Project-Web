import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Pages.css';

const NotFound = () => {
	return (
		<div>
			<div className="container d-flex">
				<div className="MainTextArea">
					<p className="textOne">Looding...</p>
					<h1 className="textTwo">
						NOT <span>FOUND</span>
					</h1>
					<h4 className="textThree">Something is wrong error:404:40</h4>
				</div>
			</div>
		</div>
    );
};

export default NotFound;
