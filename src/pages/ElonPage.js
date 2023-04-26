import React from "react";
import Card from "../components/cards/Card";
import Layout from "../components/Layouts/Layout";

export default function ElonPage() {
  return (
    <Layout>
      <div className="px-24 py-20">
        <Card
          url_img="elon.png"
          nameOfGoat="Elon Musk"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae inventore quas alias, nihil tempora recusandae? Dolorum doloremque ipsa laudantium unde repellat distinctio libero nobis nemo fuga! Sed officiis neque velit cupiditate a vel aliquid exercitationem porro asperiores sint voluptatum quos est, architecto et dolore. Minima consectetur vero dicta? Officia."
        />
      </div>
    </Layout>
  );
}
