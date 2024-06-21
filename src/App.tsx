import './App.css'
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDispatch, ProductState } from './store/productStore';
import { fetchProducts } from './reducers/productsSlice';
import ProductOverview from './components/ProductOverview/ProductOverview';

function App() {
  const dispatch: ProductDispatch = useDispatch();
  const status = useSelector((state: ProductState) => state.data.status);
  const error = useSelector((state: ProductState) => state.data.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <>
      <Navbar></Navbar>
        
      
      {status !== "succeeded" && 
        <div className='status-container'>
          {status === "loading" && (
            <h2 className="status">Loading...</h2>
          )}
          {status === "failed" && (
            <h2 className="status">Failed to load: {error ? error : ""}</h2>
          )}
        </div>
      }

      {status === "succeeded" && (
        <ProductOverview></ProductOverview>
      )}
    </>
  )
}

export default App
