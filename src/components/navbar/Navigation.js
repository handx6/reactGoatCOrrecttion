import React from "react";
import { Link, useLocation } from "react-router-dom";
import { dataNav } from "../../data/datas";

export default function Navigation() {
	let route = useLocation().pathname;
	let activeStyle = ("text-red-500 border-b border-blue-900");
	// const handleChangecolor = () => {
	// 	setColor("bg-red-600");
	// };
	return (
		<ul
			className=  "bg-blue-500 text-white flex justify-between px-24 py-6 items-center"
		>
			<Link to='/'>
				<li className='font-black text-3xl'>Goat</li>
			</Link>
			<div className='flex items-center space-x-5'>
				{dataNav.map((item) => (
					<Link to={item.url} key={item.id}>
						<li className={route === item.url ? activeStyle : ""}>{item.name}</li>
					</Link>
				))}
			</div>
		</ul>
	);
}
