// import React, {useEffect, useRef} from "react";
// import {useSelector, useDispatch} from "react-redux";
// import {inputData,clearCard} from "../productSlice";
// import { cards } from "../productSlice";

// const Form = () => {
//   const inputRef = useRef(null);
//   const fileRef = useRef(null);
//   const selectRef = useRef(null);
//   const messageRef = useRef(null);
//   const checkBrandsRef = useRef(null);
//   const checkProductsRef = useRef(null);
//   const checkFashionRef = useRef(null);
//   const dispatch = useDispatch();
//   const {todos} = useSelector((store) => store.product);
//   const status = useSelector(state => state.product.status);

//   function handleInput(e) {
//     e.preventDefault();
//     let res ={
//         title:inputRef.current.value,
//         file:fileRef.current.value,
//         select:selectRef.current.value,
//         message:messageRef.current.value,
//         checkBrands:checkBrandsRef.current.value,
//         checkFashion:checkFashionRef.current.value,
//         checkProducts:checkProductsRef.current.value
//     }
//     dispatch(inputData(res));
//     inputRef.current.value = "";
//   }

// function getData(){
  
//     if (status === 'qalesan') {
//       dispatch(cards());
//     }
 
// }

//   return (
//     <div className="mx-4">
//       <form
//         action=""
//         onSubmit={handleInput}
//         className="flex flex-col gap-5 justify-center items-center w-full max-w-xl mx-auto p-6 md:p-10 border rounded-2xl my-10 bg-slate-200">
//         <div className="flex flex-col w-full max-w-60 mx-auto  gap-5">
//           <input
//             type="text"
//             placeholder="Title"
//             ref={inputRef}
//             className="input input-bordered input-sm"
//           />

//           <input
//             type="file"
//             placeholder="Image"
//             ref={fileRef}
//             className="file-input file-input-bordered file-input-primary file-input-sm"
//           />

//           <select
//             name="status"
//             id="status"
//             className="select select-bordered select-sm"
//             ref={selectRef}>
//             <option
//               value="new"
//               className="disabled selected">
//               New
//             </option>
//             <option value="medium">Medium</option>
//             <option value="old">Old</option>
//           </select>

//           <textarea
//             ref={messageRef}
//             className="textarea textarea-bordered"
//             placeholder="Message..."></textarea>

//           <div className="form-control">
//             <label className="label cursor-pointer">
//               <span className="label-text">Brands</span>
//               <input
//                 ref={checkBrandsRef}
//                 type="checkbox"
//                 className="checkbox"
//               />
//             </label>
//             <label className="label cursor-pointer">
//               <span className="label-text">Fashion</span>
//               <input
//                 ref={checkFashionRef}
//                 type="checkbox"
//                 className="checkbox"
//               />
//             </label>
//             <label className="label cursor-pointer">
//               <span className="label-text">Products</span>
//               <input
//                 ref={checkProductsRef}
//                 type="checkbox"
//                 className="checkbox"
//               />
//             </label>
//           </div>
//         </div>
//         <div className="btn-group flex justify-center gap-5">
//           <button
//             type="submit"
//             className="btn btn-primary">
//             Submit
//           </button>
//           <button
//           onClick={getData}
//             type="button"
//             className="btn btn-accent">
//             Get todos
//           </button>
//           <button
//           onClick={()=>dispatch(clearCard())}
//             type="button"
//             className="btn btn-secondary">
//             Clear todos
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;
