import React from 'react';
import Avatar from '../assets/ivan.jpg';

export default function Info() {
	return (
		<div className="info_container">
			<img src={Avatar} className="avatar" />
			<div className="info_container--content">
				<h1>Iván Verdugo</h1>
				<h4>Frontend Developer</h4>
				<p>https://ivan270-dev.netlify.app/</p>
				<button>
					<i className="btn-icon fa-solid fa-envelope"></i>Email
				</button>
			</div>
		</div>
	);
}
