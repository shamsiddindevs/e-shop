import {useSelector, useDispatch} from "react-redux";
import {getData,  studentSlice} from "./redux/Student";
import {useEffect} from "react";
import Home, { loader as homeLoader } from "./pages/Home";

// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Product from "./pages/Product";
import ProductItems from "./pages/ProductItems";



// import Form from './components/Form'
// import CardContainer from './components/CardContainer'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          index:true,
          element: <Home />,
          loader:homeLoader,
        },
        {
          path:"/product/:id",
          element: <Product />, 
        },
        {
          path:"/items",
          element: <ProductItems />, 
        },
        ]
    },
  ]);

  const {students: store, status} = useSelector((store) => store.student);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log("student:", status);
  return (
    <div>
     
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
