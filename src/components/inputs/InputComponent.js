import React from "react";

export default function InputComponent({
	label,
	type = "text",
	name,
	value,
	onChange,
}) {
	return (
		<div>
			<label>{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				className='block border border-gray-400 rounded-lg mt-2 p-1 '
			/>
		</div>
	);
}
