import React from "react";

export default function Card({ nameOfGoat, content, url_img }) {
	return (
		<div className='flex space-x-8 '>
			<img src={`img/${url_img}`} alt='' className='max-w-sm' />
			<div className=''>
				<h2 className='font-bold text-2xl py-5'>Hi, I'm {nameOfGoat}</h2>
				<p>{content}</p>
			</div>
		</div>
	);
}
