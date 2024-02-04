import React from "react";
import { Product } from "../src/components/products";
import { useAxios } from "../src/services/useAxios";
import { Navbar } from "../src/components/navbar";

export interface IitemProps {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
  category: object;
}

const Shop: React.FC = () => {
  const [loading, data, error] = useAxios<IitemProps>({
    method: "GET",
    url: "https://api.escuelajs.co/api/v1/products",
  });

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <div className="bg-white">
      <Navbar />
      <div className="text-center text-2xl font-bold my-4">Online Listings</div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((product) => (
            <Product key={product.id} obj={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
