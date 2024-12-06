import React, { useState } from "react";
import { FaStar,FaHeart,FaShoppingBag } from "react-icons/fa";

import { increment } from "../redux/Counter";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setId } from "../redux/Student";


const Card = ({
  id,
  tags,
  rating,
  brand,
  stock,
  availabilityStatus,
  price,
  images,
  discountPercentage,
  card
}) => {
    
    let dispatch  = useDispatch();
    let basket = useSelector((store)=>store.counter.data);
    // console.log(basket);
    const [like ,setLike] = useState(false) 
    // const [bag ,setBag] = useState(true)
    // 

  const handleBtn =(e)=>{
    e.preventDefault()
    dispatch(increment({...card,amount:1}));
    // dispatch(reset(card));
  }
  const handleSetId = (id) => {
    dispatch(setId(id)); // Redux store-ga ID yuboriladi
};
    


  return (
    <Link to={`/product/${id}`} onClick={()=>handleSetId(id)} className="card  group bg-gray-200 w-80 md:w-[350px] mx-auto lg:w-96  shadow-lg hover:skeleton">
      <figure>
        <img
          src={images[0] ?? "https://picsum.photos/200/300"}
          alt="Shoes"
          className="w-[200px] h-[200px] object-cover rounded-3xl mt-10 transition-all  group-hover:scale-110  "
        />
      </figure>
      
      <div className="  absolute top-1/2 right-6 left text-xl text-gray-500"><button onClick={(e)=>handleBtn(e)
      } className={` rounded-full text-xl text-green-500 p-3 active:scale-90 transition-all border border-green-400 active:bg-green-400 active:text-white`}><FaShoppingBag/></button></div>

      <div className=" absolute top-5 right-6 left"><button onClick={(e)=>{setLike(!like);
        e.preventDefault();
      }} className={`rounded-full text-xl  p-3 active:scale-90 transition-all border border-gray-300  ${like ?"text-red-600":"text-gray-50"}`}><FaHeart/></button></div>

      <div className="card-body">
        <h2 className="card-title">
          {brand ?? "Face"}
          <div className="badge bg-green-400 uppercase">
            {availabilityStatus ?? "NEW"}
          </div>
        </h2>
        <p>
          {" "}
          <del className="text-gray-500">{price}$</del>{" "}
          <span className="font-bold">
            {(price - (price * discountPercentage) / 100).toFixed(2)}$
          </span>
        </p>
        <div className="card-actions justify-between flex flex-wrap">
            <div className="flex gap-2 items-center font-semibold"><FaStar className="text-orange-400"/><span className="font-bold">{rating??""}</span><span className="text-xs text-gray-500">{stock}"reviews"</span></div>
          <div>
            <div className="badge badge-outline capitalize">
              {tags[0] ?? "Products"}
            </div>
            <div className="badge badge-outline capitalize ml-1">
              {tags[1] ?? "Products"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
