import React, { useState } from "react";
import Card from "../components/cards/Card";
import Layout from "../components/Layouts/Layout";

export default function StevePage({ society, setSociety }) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const handleShow = () => {
    setShow(!show);
  };

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Layout>
      <div className="px-24 py-20">
        <Card
          url_img="steve.png"
          nameOfGoat="Steve Jobs"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae inventore quas alias, nihil tempora recusandae? Dolorum doloremque ipsa laudantium unde repellat distinctio libero nobis nemo fuga! Sed officiis neque velit cupiditate a vel aliquid exercitationem porro asperiores sint voluptatum quos est, architecto et dolore. Minima consectetur vero dicta? Officia."
        />

        <div className="my-10">
          <p>{society}</p>
          <p className="text-3xl font-black text-blue-500 pb-6">
            Likes: {count}
          </p>
          <button
            onClick={incrementCount}
            className="bg-blue-500 text-white p-3 rounded-lg mb-5"
          >
            Incrementer +1
          </button>
          <button
            onClick={decrementCount}
            className="bg-pink-500 text-white p-3 rounded-lg mb-5 ml-6"
          >
            Décrementer -1
          </button>

          <button
            onClick={handleShow}
            className={`${
              show ? "bg-indigo-600" : "bg-green-600"
            } text-white p-3 rounded-lg mb-5 block`}
          >
            {show ? "Cacher" : "Voir"}
          </button>
          {show === true && (
            <div className="bg-green-100 p-10 max-w-md text-lg ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis voluptas, sint ea repudiandae cum quasi quis
                nostrum vel quae ipsa, possimus doloribus ullam. Eveniet,
                corporis omnis? Sapiente, quae animi? Perspiciatis.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
