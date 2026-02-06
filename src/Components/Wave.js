import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import waveImage from './icon/waveImage.png';

const styles = {
    wave: {
      	position: 'absolute',
      	top: 0,
      	left: 0,
      	width: '100%',
      	height: '730px',
      	zIndex: -99,
      	display: 'flex',
      	justifyContent: 'center',
      	backgroundImage: `url(${waveImage})`,
      	backgroundRepeat: 'repeat-x',
    },
};

export default class Wave extends Component {
  	render() {
    	return <div style={styles.wave}></div>;
  	}
}
