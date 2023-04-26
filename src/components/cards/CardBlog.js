import React from 'react'
import { Link } from 'react-router-dom';

export default function CardBlog({title,body,id}) {
  return (
    <div className=" mx-auto w-72  text-center  justify-center align-center bg-slate-300 shadow-md rounded-sm overflow-hidden ">
      <Link to={`/posts/${id}`}>
        <img
          src="img/Grand.jpg"
          alt="{title}"
          className="w-full h-48 object-cover p-2 "
        />
        <div className=" px-4 py-2">
          <p className="text-blue-300 font-bold text-lg py-2">{body}</p>
          <h2 className="font-bold text-lg py-2"> {title}</h2>
          <div className="flex justify-center">
            <p className="border border-blue-300 m-1 w-10"></p>
          </div>
          <p className="text-sm">{body}</p>
        </div>
      </Link>
    </div>
  );
}
