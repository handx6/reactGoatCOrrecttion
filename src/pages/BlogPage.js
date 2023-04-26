import React, { useEffect, useState } from "react";
import CardBlog from "../components/cards/CardBlog";
import { datasBlog } from "../data/datasBlog";
import Layout from "../components/Layouts/Layout";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=3";

  //1- utiliser un hook userEffect pour fetcher data de l'API
  //2- fetch le renvoie une promesse
  //3- Ensuite je transforme la reponse en json
  // 4- Ensuite je recupère le resultat en json
  // 5- ensuite je stock le resultat
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (resultat) => {
          setIsLoading(true);
          setPosts(resultat);
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
        <>
          <div className="text-center py-5 font-bold text-xl">
            Bienvenue sur mon Blog
          </div>
          <div className="flex justify-center py-10">
            <aside className="grid grid-cols-3 gap-14">
              {posts.map((item) => (
                <CardBlog key={item.id} title={item.title} id={item.id}  body={item.body} />
              ))}
            </aside>
          </div>
        </>
      </Layout>
    );
  }
}
