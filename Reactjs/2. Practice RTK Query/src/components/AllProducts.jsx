import React, { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "../app/service/dummyData";

const AllProducts = () => {
  // Fetch all products (assuming you might display them elsewhere)
  const { data: allProducts } = useGetAllProductsQuery();
  
  // State for selected product ID
  const [id, setId] = useState(0);
  
  // Fetch product by ID dynamically using `id` state
  const { data: product } = useGetProductByIdQuery(id, { skip: id === 0 });
console.log(product)
  return (
    <div className="w-screen flex flex-col items-center">
      <h1 className="text-[25px]">Get Product By Id</h1>
      <input
        type="text"
        placeholder="Enter ID"
        className="border-2 border-black"
        value={id}
        onChange={(e) => setId(Number(e.target.value) || 0)} // Convert input to number
      />
      <div className="w-[300px] border mt-10 flex flex-col items-center">
        {product ? (
          <>
            <img
              src={product.images[0]
                || ""}
              alt={product.title || "No image available"}
              className="w-[250px] h-[250px]"
            />
            <h1>{product.title}</h1>
          </>
        ) : (
          <p>No product found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
