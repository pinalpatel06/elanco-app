import { FC, useState, useEffect } from 'react'
import './index.css'
import Navbar from '../../components/navbar'
import { useLocation, useParams } from 'react-router'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { getProductDetail } from './state/reducer';

export function ProductDetail(){
  const [products, setProducts] = useState([]);
  const {id}=useParams();
  console.log(id);
  const location = useLocation()
  console.log(location.state)

  const dispatch = useAppDispatch()
  useEffect(() => {
    if(id) {
      dispatch(getProductDetail({resourceName: id}))
        .unwrap()
        .then((res) => setProducts(res))
    }
    console.log('inside product listing useeff')
  })

  return (
    <div className="bg-white">
    <div className="mx-auto py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8">
        {products &&
          products?.map((product: any) => (
            <div className='border-shadow'>
              <h1>{product?.ResourceGroup}</h1>
              <p>Cost {product?.Cost}</p>
              <p>ConsumedQuantity: {product?.ConsumedQuantity}</p>
              <p>Date: {product?.Date}</p>
              <p>InstanceId: {product?.InstanceId}</p>
              <p>ResourceLocation: {product?.ResourceLocation}</p>
              <p>UnitOfMeasure: {product?.UnitOfMeasure}</p>

              </div>
          ))}
      </div>
    </div>
  </div>
  )
}