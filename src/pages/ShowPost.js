import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import { useParams } from "react-router-dom";

export default function ShowPost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (resultat) => {
          setIsLoading(true);
          setPost(resultat);
        },
        (error) => {
          setIsLoading(true);
          setError(error.message);
        }
      );
  }, []);
  if (!isLoading) {
    return (
      <Layout>
        <p className="text-green-500 text-center text-2xl py-24">
          En Chargement...
        </p>
      </Layout>
    );
  } else if (error) {
    return (
      <Layout>
        <p className="text-red-500 text-center text-2xl py-24">
          Erreur : {error}
        </p>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="px-24 py-20">
          <div className="mx-auto w-72  text-center  justify-center align-center bg-slate-300 shadow-md rounded-sm overflow-hidden">
            <img
              src="/img/Grand.jpg"
              alt="{post.title}"
              className="w-full h-48 object-cover p-2"
            />
            <div className="px-4 py-2">
              <h1 className="font-bold text-lg py-2 text-blue-400">
                {post.title}
              </h1>
              <p className=" ">{post.body}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
