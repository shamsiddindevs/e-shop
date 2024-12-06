import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Item";

const ProductItems = () => {
  let dispatch = useDispatch();
  let { data, sum, total } = useSelector((store) => store.counter);
  // console.log(title,description,price);

  return (
    <div className="py-10 lg:py-20">
      <div className="align-center overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data.map((v) => (
              <Item key={v.id} {...v} />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Total Amount: <b className="ml-1">{total}</b></th>
              <th></th>
              <th>Total Price: <b className="ml-1">{sum}</b></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductItems;
