import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import { Link } from "react-router-dom";

export default function Table() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (resultat) => {
          setIsLoading(true);
          setUsers(resultat);
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
      <div className="flex flex-col p-20">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className=" inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg">
              <table class="border border-gray-400 rounded-lg min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium bg-gray-200 dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Phone
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Company
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        <Link to={`/stagiaire/${user.id}`}>{user.name}</Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.phone}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.company.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
