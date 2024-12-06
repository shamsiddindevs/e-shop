import React from 'react';
import { useSelector } from 'react-redux';


const Product = () => {
  let {students,id} = useSelector(store=>store.student);
  console.log(students,id);
  let [product] = students.filter(v=>v.id==id);
  

  return (
    <div>
      <section id='product' className='py-10 lg:py-20'>
        <div className="mx-auto w-full max-w-7xl px-6 ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-5 ">
            <div className="cardImg">
              <img src={product?.thumbnail} className=' w-[300px] h-[300px] object-cover rounded-3xl mt-10 transition-all  hover:scale-110  skeleton' alt="product image" />
            </div>
            <div className="cardInfo">
              <h3 className='text-xl font-semibold'>{product?.title}</h3>
              <p className='mt-2 mb-4'>{product?.description}</p>
              <div className="flex gap-5 ">
                <div className="bg-green-300 w-10 h-10"></div>
                <div className="bg-orange-400 w-10 h-10"></div>
                <div className="bg-gray-400 w-10 h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product