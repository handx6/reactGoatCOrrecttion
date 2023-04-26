import React, { useState } from "react";
import InputComponent from "../components/inputs/InputComponent";
import Layout from "../components/Layouts/Layout";

function Item({ title, value }) {
	return (
		<div>
			{title}: {value}
		</div>
	);
}

export default function ContactPage() {
	const [inputs, setInputs] = useState([]);
	const [message, setMessage] = useState("")

	const handleChange = (event) => {
		// je cible mes value de mes inputs
		const value = event.target.value;
		// cibler le name de mes inputs
		const name = event.target.name;
		// je set toutes les valeurs et leur clé dans mon tableau imputs
		setInputs((values) => ({ ...values, [name]: value }));
	};
	// const toto = Object.keys(inputs);
	const inputsArray = Object.keys(inputs);
	const handleSubmit = (event) => {
		event.preventDefault();
		setMessage
		(inputsArray.map((item) =><p>L'input { item } voici sa valeur: {inputs[item]}</p>));
	};
		// console.log(inputs);
		// modifie la soumission du formulaire par defaul

	return (
    <Layout>
      <div className="px-24 py-20">
        <h1 className="font-bold text-3xl pb-8 text-center">Nous contacter</h1>
        {message !== "" && (
          <div>
            <p>Voici tes données envoyées</p>
            <div className="bg-green-500 p-5">{message}</div>
          </div>
        )}
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="flex space-x-6">
            <InputComponent
              label="Prénom"
              name="fName"
              value={inputs.fName || ""}
              onChange={handleChange}
            />
            <InputComponent
              label="Nom"
              name="lName"
              value={inputs.lName || ""}
              onChange={handleChange}
            />
          </div>
          {/* email + pwd*/}
          <div className="flex space-x-6 mt-5">
            <InputComponent
              label="Email"
              name="email"
              type="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <InputComponent
              label="Mot de passe"
              name="password"
              type="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          {/* adress1 */}
          <div className="mt-5">
            <InputComponent
              label="Adresse 1"
              name="adress1"
              value={inputs.adress1 || ""}
              onChange={handleChange}
            />
          </div>
          {/* adress2 */}
          <div className="mt-5">
            <InputComponent
              label="Adresse 2"
              name="adress2"
              value={inputs.adress2 || ""}
              onChange={handleChange}
            />
          </div>

          <div className="flex space-x-6 mt-5">
            <InputComponent
              label="Ville"
              name="city"
              value={inputs.city || ""}
              onChange={handleChange}
            />
            <InputComponent
              label="Code Postal"
              name="code_postal"
              type="number"
              value={inputs.code_postal || ""}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="2"
              className="border border-gray-400 block"
              value={inputs.message || ""}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            value="Envoyer"
            className="bg-blue-500 p-3 text-white rounded-lg mt-5 w-full"
          />
        </form>
      </div>
    </Layout>
  );
}
