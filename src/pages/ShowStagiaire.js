import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import { Link, useParams } from "react-router-dom";

export default function ShowUser() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (resultat) => {
          setIsLoading(true);
          setUser(resultat);
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
          <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              Profile info
            </div>
            <div className="p-6 text-left">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {user.name}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <span className="font-bold">Username: </span>{user.username}
              </p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <span className="font-bold">Email: </span>{user.email}
              </p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <span className="font-bold">Address: </span>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              </p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <span className="font-bold">Phone number: </span>{user.phone}
              </p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <span className="font-bold">Website: </span><Link to={user.website}>{user.website}</Link>
              </p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <span className="font-bold">Company: </span>{user.company.name}
              </p>
            </div>
            <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              <Link to="/stagiaire">Back to interns' list</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
