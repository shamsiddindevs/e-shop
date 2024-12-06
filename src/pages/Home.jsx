import React from "react";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Navbar from "../components/Navbar";
import { request } from "../util/request";
import { useLoaderData } from "react-router-dom";



export const loader = async()=>{
  const req = await request.get('/products');
  // console.log(req);
  return req.data;
}



const Home = () => {
  let {products} =  useLoaderData()
  console.log(products);
  
  return (
    <>
      <CardContainer base = {products} />
    </>
  );
};

export default Home;
