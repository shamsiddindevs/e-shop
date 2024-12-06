import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus, remove } from "../redux/Counter";

const Item = ({id, title, price, description, thumbnail,amount }) => {

    let {data} = useSelector((store)=>store.counter);
    let dispatch = useDispatch();
    
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={thumbnail} alt="items Avatar " />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{price}</div>
            </div>
          </div>
        </td>
        <td>
          <p>{description}</p>
        </td>
        <td>
          <div className="flex items-center gap-3">
            <button className="btn btn-sm" onClick={()=>dispatch(minus(id))}>&#8722;</button>
            <span className="xl font-semibold">{amount}</span>
            <button className="btn btn-sm" onClick={()=>dispatch(plus(id))}>&#43;</button>
          </div>
        </td>
        <th>
          <button onClick={()=>dispatch(remove(id))} className="btn btn-xs text-red-600">
            <FaTrashAlt />
          </button>
        </th>
      </tr>
    </>
  );
};

export default Item;
