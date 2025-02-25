import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { productUrl } from "../../Api/endpoints";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {
  const [results, setResults] = useState({});
  const { productId } = useParams();
  // console.log(productId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${productUrl}/products/${productId}`); //+
        setResults(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <LayOut>
      <div>
        <ProductCard product={results} />
      </div>
    </LayOut>
  );
}

export default ProductDetail;
